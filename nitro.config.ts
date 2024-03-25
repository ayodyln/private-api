//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    "/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "https://www.dylan-portfolio.dev",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
        "X-API-KEY": "",
      },
    },
  },
});
