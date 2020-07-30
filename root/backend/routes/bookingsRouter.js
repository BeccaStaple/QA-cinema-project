const bookingsRouter = require("express").Router();

const {
  getMovieTimes,
  getMakeBookingData,
  getTimesAndBookings,
  postBooking,
} = require("../controllers/bookingsController");

bookingsRouter.get("/", getMovieTimes);
bookingsRouter.get("/makeBooking/:id", getMakeBookingData);
bookingsRouter.get("/makeBookings/:id", getTimesAndBookings);
bookingsRouter.post("/confirmbooking", postBooking);

module.exports = bookingsRouter;
