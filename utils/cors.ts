export const corsHndlr = (headers, origin: string[]) =>
  isCorsOriginAllowed(headers["access-control-allow-origin"], {
    origin,
  });
