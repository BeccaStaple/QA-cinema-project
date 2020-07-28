const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const { describe } = require("mocha");
const request = require("supertest");

describe("Screen", () => {
  describe("All Screens", () => {
    it("GET: returns an array", () => {
      return request(app)
        .get("/cinema/screens")
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
    it("GET; returns the correct details", () => {
      return request(app)
        .get("/cinema/screens")
        .expect(200)
        .then((res) => {
          const screens = res.body[0];
          expect(screens).to.have.all.keys(
            "theatre_Screen_id",
            "screen_name",
            "seat_no"
          );
        });
    });
    it("GET: returns the correct screen values", () => {
      return request(app)
        .get("/cinema/screens")
        .expect(200)
        .then((res) => {
          const screens = res.body;
          expect(screens).to.eql([
            {
              theatre_Screen_id: 1,
              screen_name: "Director's Box",
              seat_no: 10,
            },
            {
              theatre_Screen_id: 2,
              screen_name: "Standard Screen",
              seat_no: 40,
            },
          ]);
        });
    });
  });
});
