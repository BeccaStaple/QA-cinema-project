const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRoutes");

app.use(express.json());

app.use("/cinema", apiRouter);

module.exports = app;
