import { z } from "zod";

type Company = {
    id?: string;
    name: string;
    description?: string;
    website?: string;
    domains: string[];
};

const companiesSchema = z.array(z.object({
    id: z.string(),
    name: z.string(),
    domains: z.array(z.string()),
}));

const companySchema = z.object({
    name: z.string(),
    description: z.string(),
    website: z.string(),
    domains: z.array(z.string()),
});

export async function getCompanies(): Promise<Company[]> {
    const response = await fetch("http://localhost:3000/companies");
    const json = await response.json();
    const parsed = companiesSchema.safeParse(json);

    if (parsed.success) {
        return parsed.data.map(company => ({
            id: company.id,
            name: company.name,
            domains: company.domains,
        }));
    } else {
        console.error(parsed.error);
        throw new Error("Failed to parse company data");
    }
}

export async function getCompany(id: string): Promise<Company> {
    const response = await fetch(`http://localhost:3000/company/${id}`);
    const json = await response.json();
    const parsed = companySchema.safeParse(json);

    if (parsed.success) {
        return {
            name: parsed.data.name,
            description: parsed.data.description,
            website: parsed.data.website,
            domains: parsed.data.domains,
        };
    } else {
        console.error(parsed.error);
        throw new Error("Failed to parse company data");
    }
}