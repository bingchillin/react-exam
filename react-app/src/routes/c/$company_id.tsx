import { createFileRoute } from "@tanstack/react-router";
import { getCompany } from "../../api/companies";

export const Route = createFileRoute("/c/$company_id")({
  component: Company,
  loader: async ({ params }) => await getCompany(params.company_id),
});

function Company() {
  const company = Route.useLoaderData();
  console.log(company);
  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <p>Website: {company.website}</p>
      <p>Domains: {company.domains.join(", ")}</p>
    </div>
  );
}
