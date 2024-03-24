import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  onRequest: (event) => {
    const { respondWith } = event;
    const cors = corsHndlr(getHeaders(event), [process.env.CORS_ORIGIN]);
    if (!cors) respondWith(new Response("Origin Not Allowed", { status: 403 }));
  },
  onBeforeResponse: (event) => {},
  handler: (event) => {
    const headers = getHeaders(event);
    // console.log(headers);

    return "Response";
  },
});
