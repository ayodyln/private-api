export const corsHndlr = (headers, origin: string[]) =>
  isCorsOriginAllowed(headers.origin, {
    origin,
  });
