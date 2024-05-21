import { createFileRoute } from "@tanstack/react-router";
import { getCompany } from "../../api/companies";

export const Route = createFileRoute("/c/$company_id")({
  component: Company,
  loader: async ({ params }) => await getCompany(params.company_id),
});

function Company() {
  const { company_id } = Route.useParams();
  const company = Route.useLoaderData();
  console.log(company);
  return <div>Hello /company {company_id}!</div>;
}
