const movieRouter = require("express").Router();

const getMovies = require("../controllers/movieController");

movieRouter.route("/", getMovies);

module.exports = movieRouter;
