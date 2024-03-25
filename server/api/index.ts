import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest: (event) => {
    const origin = getHeader(event, "origin");
    const apiKey = getHeader(event, "x-api-key");

    if (!origin) {
      event.respondWith(
        new Response("Bad Request: Missing Origin Header", { status: 400 })
      );
    }

    if (origin !== process.env.ALLOWED_ORIGIN) {
      event.respondWith(new Response("Access Not Allowed", { status: 403 }));
    }

    if (!corsHndlr(getHeaders(event), [process.env.ALLOWED_ORIGIN]))
      event.respondWith(new Response("Access Not Allowed", { status: 403 }));

    //  Check for API KEY
    if (!apiKey) {
      event.respondWith(
        new Response("X-API-KEY HEADER — API Key Required", { status: 403 })
      );
    }

    if (apiKey !== process.env.API_KEY) {
      event.respondWith(
        new Response("X-API-KEY HEADER — Invalid API Key", { status: 403 })
      );
    }
  },
  onBeforeResponse: (event) => {},
  handler: (event) => {
    return new Response(JSON.stringify("Hello, World!"));
  },
});
