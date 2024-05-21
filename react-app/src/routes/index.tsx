import { createFileRoute } from "@tanstack/react-router";
import { getCompanies } from "../api/companies";

export const Route = createFileRoute("/")({
  component: Companies,
  loader: async () => await getCompanies(),
});

function Companies() {
  const companies = Route.useLoaderData();
  console.log(companies);
  return <div>Hello companies!</div>;
}
