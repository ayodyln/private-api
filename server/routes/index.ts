import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest: (event) => {
    const headers = getHeaders(event);
    console.log("request", headers);
    if (!headers["access-control-allow-origin"]) {
      event.respondWith(
        new Response("Missing Access-Control-Allow-Origin", { status: 403 })
      );
    }
    const cors = corsHndlr(headers, ["http://localhost:3000"]);
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
