import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest,
  onBeforeResponse,
  handler: (event) => {
    const headers = getHeaders(event);
    // console.log(headers);

    return new Response(JSON.stringify("Hello, World!"));
  },
});

function onRequest(event) {
  const headers = getHeaders(event);

  if (!headers["origin"]) {
    event.respondWith(
      new Response("Bad Request: Missing Origin Header", { status: 400 })
    );
  } else if (headers["origin"] !== process.env.ALLOWED_ORIGIN) {
    event.respondWith(new Response("Access Not Allowed", { status: 403 }));
  }

  const cors = corsHndlr(headers, [process.env.ALLOWED_ORIGIN]);

  if (!cors) {
    event.respondWith(new Response("Access Not Allowed", { status: 403 }));
  }
}

function onBeforeResponse(event) {
  const headers = getHeaders(event);
}
