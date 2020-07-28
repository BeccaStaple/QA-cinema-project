const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const { describe } = require("mocha");
const request = require("supertest");

describe("Ticket Type", () => {
  describe("All Ticket Types", () => {
    it("GET: returns an array", () => {
      return request(app)
        .get("/cinema/ticketTypes")
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
    it("GET; returns the correct details", () => {
      return request(app)
        .get("/cinema/ticketTypes")
        .expect(200)
        .then((res) => {
          const ticketTypes = res.body[0];
          expect(ticketTypes).to.have.all.keys(
            "ticket_Type_id",
            "ticket_Type",
            "price"
          );
        });
    });
    it("GET: returns the correct ticket type values", () => {
      return request(app)
        .get("/cinema/ticketTypes")
        .expect(200)
        .then((res) => {
          const ticketTypes = res.body;
          expect(ticketTypes).to.eql([
            {
              ticket_Type_id: 1,
              ticket_Type: "Adult",
              price: 12.55,
            },
            {
              ticket_Type_id: 2,
              ticket_Type: "Child",
              price: 7.75,
            },
            {
              ticket_Type_id: 3,
              ticket_Type: "Concession",
              price: 9.88,
            },
          ]);
        });
    });
  });
});
