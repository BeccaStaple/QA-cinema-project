const apiRouter = require("express").Router();

const movieRouter = require("./movieRouter");
const bookingsRouter = require("./bookingsRouter");

apiRouter.use("/movies", movieRouter);
apiRouter.use("/bookings", bookingsRouter);

module.exports = apiRouter;
