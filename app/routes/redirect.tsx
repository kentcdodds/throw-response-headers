import { redirect } from "@remix-run/node";

export async function loader() {
  throw redirect("/", { headers: { "x-my-header": "sup" } });
}

export default function RedirectHeaders() {
  return <p>You should never see this</p>;
}
