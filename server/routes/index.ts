import { corsHndlr } from "../../utils/cors";

export default eventHandler({
  handler: (event) => {
    const headers = getHeaders(event);
    // console.log(headers);

    return new Response(JSON.stringify("Hello, World!"));
  },
});
