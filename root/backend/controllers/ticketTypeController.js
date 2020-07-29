const connection = require("../models/db");

const getTicketType = async (req, res, next) => {
  connection.query("SELECT * FROM ticket_Type", function (
    err,
    results,
    fields
  ) {
    return res.json(results);
  });
};

module.exports = getTicketType;
