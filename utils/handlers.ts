import { corsHndlr } from "./cors";

function onRequest(event) {
  const headers = getHeaders(event);
  console.log("request", headers);
  if (!headers["origin"]) {
    event.respondWith(
      new Response("Bad Request: Missing Origin Header", { status: 400 })
    );
  } else if (headers["origin"] !== "https://www.dylan-portfolio.dev") {
    event.respondWith(new Response("Access Not Allowed", { status: 403 }));
  }
  const cors = corsHndlr(headers, ["https://www.dylan-portfolio.dev"]);
  console.log(cors);
  if (!cors) {
    event.respondWith(new Response("Access Not Allowed", { status: 403 }));
  }
}

export { onRequest };
