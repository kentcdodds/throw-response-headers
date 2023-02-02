import type { HeadersFunction } from "@remix-run/node";

export async function loader() {
  throw new Response("", { status: 418, headers: { "x-my-header": "sup" } });
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return loaderHeaders;
};

export default function ResponseHeaders() {
  return <p>You should never see this</p>;
}
