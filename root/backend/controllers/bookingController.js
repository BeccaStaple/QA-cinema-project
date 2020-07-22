// import models
const insertBooking = require("../models/bookingModel");

const postBooking = (req, res, next) => {
  insertBooking(req.body)
    .then((booking) => {
      res.sent(booking);
    })
    .catch(next);
};

module.export = postBooking;
