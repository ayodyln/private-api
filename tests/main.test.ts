import { expect, test } from "vitest";

test("Main Route Test", async () => {
  const response = await fetch("http://localhost:3000/");
  expect(response.status).toBe(200);
  expect(await response.text()).toBe("Response");
});
