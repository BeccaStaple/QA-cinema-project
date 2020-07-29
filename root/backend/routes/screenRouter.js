const screenRouter = require("express").Router();

// controller
const getScreens = require("../controllers/screensController");

screenRouter.get("/", getScreens);

module.exports = screenRouter;
