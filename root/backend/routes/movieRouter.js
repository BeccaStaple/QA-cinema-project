const movieRouter = require("express").Router();

const getMovies = require("../controllers/movieController");

movieRouter.route("/").get(getMovies);

module.exports = movieRouter;
