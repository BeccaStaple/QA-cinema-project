const ticketTypeRouter = require("express").Router();

// controller
const getTicketType = require("../controllers/ticketTypeController");

ticketTypeRouter.get("/", getTicketType);

module.exports = ticketTypeRouter;
