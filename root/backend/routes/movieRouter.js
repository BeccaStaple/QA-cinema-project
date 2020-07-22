const movieRouter = require("express").Router();

const getMovies = require("../controllers/movieController");

movieRouter.route("/").get(getMovies);
// movieRouter.route("postMovie").post(postMovie);

module.exports = movieRouter;
