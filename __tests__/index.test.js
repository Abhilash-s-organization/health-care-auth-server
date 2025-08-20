import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("should return Hello there 👀", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello there 👀");
  });
});
