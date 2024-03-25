import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest: (event) => {
    const headers = getHeaders(event);
    console.log("request", headers);
    if (!headers["origin"]) {
      event.respondWith(new Response("Missing Origin", { status: 403 }));
    }
    const cors = corsHndlr(headers, [
      "www.example.com",
    ]);
    console.log(cors);
    if (!cors) {
      event.respondWith(new Response("Access Not Allowed", { status: 403 }));
    }
  },
  onBeforeResponse: (event) => {
    const headers = getHeaders(event);
    // console.log("response", headers);
  },
  handler: (event) => {
    const headers = getHeaders(event);
    // console.log(headers);

    return headers;
  },
});
