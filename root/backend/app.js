const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRoutes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/cinema", apiRouter);

module.exports = app;
