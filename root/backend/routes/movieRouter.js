const movieRouter = require("express").Router();

const {
  getMovies,
  getStartTimeByID1,
} = require("../controllers/movieController");

movieRouter.get("/", getMovies);
movieRouter.get("/startTimesByID1", getStartTimeByID1);

module.exports = movieRouter;
