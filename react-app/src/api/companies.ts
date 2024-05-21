type Company = {
    id: string;
    name: string;
    website: string;
    domains: string[];
};

export async function getCompanies(): Promise<Company[]> {
    const response = await fetch("http://localhost:3000/companies");
    return await response.json();
}

export async function getCompany(id: string): Promise<Company> {
    const response = await fetch(`http://localhost:3000/company/${id}`);
    return await response.json();
}