const movieRouter = require("express").Router();

const {
  getMovies,
  getStartTimeById,
  getScreenByMovieId,
} = require("../controllers/movieController");

movieRouter.get("/", getMovies);
movieRouter.get("/startTimes/:id", getStartTimeById);
movieRouter.get("/screenByMovie/:id", getScreenByMovieId);

module.exports = movieRouter;
