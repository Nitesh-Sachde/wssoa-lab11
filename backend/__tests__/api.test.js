const request = require("supertest");
const app = require("../index");

describe("API", () => {
  test("GET / responds 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });

  test("GET /metrics contains http_requests_total", async () => {
    const res = await request(app).get("/metrics");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/http_requests_total/);
  });
});
