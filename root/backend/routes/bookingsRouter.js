const bookingsRouter = require("express").Router();

const {
  getMovieTimes,
  getMakeBookingData,
  getTimesAndBookings
} = require("../controllers/bookingsController");

bookingsRouter.get("/", getMovieTimes);
bookingsRouter.get("/makeBooking/:id", getMakeBookingData);
bookingsRouter.get("/makeBookings/:id", getTimesAndBookings);

module.exports = bookingsRouter;
