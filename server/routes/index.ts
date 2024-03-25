import { onRequest } from "../../utils/handlers";

export default eventHandler({
  onRequest,
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
