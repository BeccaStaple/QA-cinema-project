const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const { describe } = require("mocha");
const request = require("supertest");

describe("movies", () => {
  it("GET: returns an array", () => {
    return request(app)
      .get("/cinema/movies")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("array");
      });
  });
  it("GET: all movies to include movie details", () => {
    return request(app)
      .get("/cinema/movies")
      .expect(200)
      .then((res) => {
        const movie = res.body[0];
        expect(movie).to.have.all.keys(
          "movie_id",
          "title",
          "Director",
          "cast",
          "year_released",
          "description",
          "duration_min",
          "movie_image"
        );
      });
  });
});
