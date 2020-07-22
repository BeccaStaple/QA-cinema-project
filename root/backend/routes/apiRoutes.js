const apiRouter = require("express").Router();

const movieRouter = require("./movieRouter");

apiRouter.use("/movies", movieRouter);

module.exports = apiRouter;
