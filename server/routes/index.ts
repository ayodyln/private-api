import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest: (event) => {
    const headers = getHeaders(event);
    console.log("request", headers);

    if (headers["access-control-request-origin"] !== process.env.CORS_ORIGIN) {
      event.respondWith(new Response("Not Allowed", { status: 403 }));
    }

    const cors = corsHndlr(headers, [process.env.CORS_ORIGIN]);

    if (!cors) {
      event.respondWith(new Response("Not Allowed", { status: 403 }));
    }
  },
  onBeforeResponse: (event) => {
    const headers = getHeaders(event);
    console.log("response", headers);
  },
  handler: (event) => {
    const headers = getHeaders(event);
    console.log(headers);

    return headers;
  },
});
