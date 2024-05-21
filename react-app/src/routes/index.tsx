import { createFileRoute } from "@tanstack/react-router";
import { getCompanies } from "../api/companies";

export const Route = createFileRoute("/")({
  component: Companies,
  loader: async () => await getCompanies(),
});

function Companies() {
  const companies = Route.useLoaderData();
  return (
    <div>
      {companies.map((company, index) => (
        <div key={index}>
          <h2>{company.name}</h2>
          <p>Id: {company.id}</p>
          <p>Domains: {company.domains.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
