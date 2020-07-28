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

  describe("get start times by movie id", () => {
    it("should return an array", () => {
      return request(app)
        .get("/cinema/movies/startTimes/1")
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
    it("GET: returns movie start times when given a film", () => {
      return request(app)
        .get("/cinema/movies/startTimes/1")
        .expect(200)
        .then((res) => {
          const startTimeOne = res.body[0];
          expect(startTimeOne).to.have.all.keys("start_time");
        });
    });
    it("GET: returns the correct movie start times values when given a film", () => {
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

  describe("get screens by movie id", () => {
    it("GET: should return an array", () => {
      return request(app)
        .get("/cinema/movies/screenByMovie/1")
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
    it("GET: returns screen ids when given a movie ", () => {
      return request(app)
        .get("/cinema/movies/screenByMovie/1")
        .expect(200)
        .then((res) => {
          const screensOne = res.body[0];
          expect(screensOne).to.have.all.keys("fk_theatre_Screen_id");
        });
    });
    it("GET: returns the correct values when given a movie", () => {
      return request(app)
        .get("/cinema/movies/screenByMovie/1")
        .expect(200)
        .then((res) => {
          const screens = res.body;
          expect(screens).to.eql([
            {
              fk_theatre_Screen_id: 1,
            },
            {
              fk_theatre_Screen_id: 1,
            },
          ]);
        });
    });
  });
});
