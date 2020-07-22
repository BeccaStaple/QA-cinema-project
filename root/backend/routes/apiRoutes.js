const apiRouter = require("express").Router();

const movieRouter = require("./movieRouter");

apiRouter.use("/movies", movieRouter);
// apiRouter.use("/booking", bookingRouter);

module.exports = apiRouter;
