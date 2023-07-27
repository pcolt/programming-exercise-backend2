import request from "supertest";
import app from "../src/app";

describe("GET /todo", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/todo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "todo",
        },
        done
      );
  });

  afterAll(() => {
    app.close();
  });
});
