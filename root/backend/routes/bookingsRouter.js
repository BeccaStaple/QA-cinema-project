const bookingsRouter = require("express").Router();

const getMovieTimes = require("../controllers/bookingsController");

bookingsRouter.get("/", getMovieTimes);

module.exports = bookingsRouter;
