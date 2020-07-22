const apiRouter = require("express").Router();

const { movieRouter } = require("./movieRouter");
const bookingRouter = require("./bookingRouter");

apiRouter.use("/movies", movieRouter);
apiRouter.use("booking", bookingRouter);

module.exports = apiRouter;
