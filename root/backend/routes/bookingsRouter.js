const bookingsRouter = require("express").Router();

const {
  getMovieTimes,
  getMakeBookingData,
} = require("../controllers/bookingsController");

bookingsRouter.get("/", getMovieTimes);
bookingsRouter.get("/makeBooking/:id", getMakeBookingData);

module.exports = bookingsRouter;
