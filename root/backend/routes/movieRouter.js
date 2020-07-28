const movieRouter = require("express").Router();

const getMovies = require("../controllers/movieController");

movieRouter.get("/", getMovies);

module.exports = movieRouter;
