// hello_world.test.js
import { expect, test } from "vitest";

test("Test API Call", async () => {
  const response = await fetch("http://localhost:3000/api/test");
  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ message: "Hello, world!" });
});
