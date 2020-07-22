const bookingRouter = require(express).Router();

bookingRouter.route("/").post(postBooking);

module.exports = bookingRouter;
