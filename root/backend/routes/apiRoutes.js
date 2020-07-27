const apiRouter = require("express").Router();

const movieRouter = require("./movieRouter");
const bookingsRouter = require("./bookingsRouter");
const screenRouter = require("./screenRouter");
const ticketTypeRouter = require("./ticketTypeRouter");

apiRouter.use("/movies", movieRouter);
apiRouter.use("/screens", screenRouter);
apiRouter.use("/ticketTypes", ticketTypeRouter);

apiRouter.use("/bookings", bookingsRouter);

module.exports = apiRouter;
