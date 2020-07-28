const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const { describe } = require("mocha");
const request = require("supertest");

describe("MOVIES", () => {
  describe("get all movies", () => {
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
  describe("get start times ", () => {
    it("GET: returns movie start times when user selects a film", () => {
      return request(app)
        .get("/cinema/movies/startTimes/1")
        .expect(200)
        .then((res) => {
          const startTimeOne = res.body[0];
          expect(startTimeOne).to.have.all.keys("start_time");
        });
    });
    it("GET: returns the correct movie start times when a user selects a film", () => {
      return request(app)
        .get("/cinema/movies/startTimes/1")
        .expect(200)
        .then((res) => {
          const startTimes = res.body;
          expect(startTimes).to.eql([
            {
              start_time: 1200,
            },
            {
              start_time: 1600,
            },
          ]);
        });
    });
  });
});
