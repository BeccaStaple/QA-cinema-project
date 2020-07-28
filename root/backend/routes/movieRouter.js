const movieRouter = require("express").Router();

const {
  getMovies,
  getStartTimeById,
} = require("../controllers/movieController");

movieRouter.get("/", getMovies);
movieRouter.get("/startTimes/:id", getStartTimeById);

module.exports = movieRouter;
