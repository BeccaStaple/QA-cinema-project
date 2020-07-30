const connection = require("../models/db");
const { connect } = require("../models/db");

const getMovieTimes = async (req, res, next) => {
  connection.query("SELECT * FROM MovieTime", function (err, results, fields) {
    return res.json(results);
  });
};

const getTimesAndBookings = async (req, res, next) => {
  const data = {
    bookings: [],
    screens: [],
  };
  const selectStartTimeAndScreenId = ` SELECT start_time, fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id}`;

  connection.query(selectStartTimeAndScreenId, function (err, results, fields) {
    if (err) return next(err);
    data.bookings = results;
    const ids = data.bookings.map((booking) => booking.fk_theatre_Screen_id);
    const uniqueIds = [...new Set(ids)].join(", ");

    connection.query(
      `SELECT * FROM screen where theatre_Screen_id in (${uniqueIds})`,
      function (err, screensResults, fields) {
        if (err) return next(err);
        data.screens = screensResults;
        res.json(data);
      }
    );
  });
};
const getMakeBookingData = async (req, res, next) => {
  const selectStartTimeAndScreenId = ` SELECT start_time, fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id}`;

  connection.query(selectStartTimeAndScreenId, function (err, result, fields) {
    return res.json(result);
  });
};

const postBooking = async (req, res, next) => {
  let customerName = req.body.customer_name;
  let customerEmail = req.body.customer_email;
  let movieTimeId = null;
  let ticketTypeId = null;
  let paymentId = null;
  let adultQuantity = req.body.adult_qty;
  let childQuantity = req.body.child_qty;
  let concessionQuantity = req.body.concession_qty;
  let movieDate = req.body.movie_date;
  let movieTime = req.body.movie_time;
  let movieId = req.body.fk_movie_id;
  let screenId = req.body.fk_screen_id;

  let hello = `INSERT INTO booking (customer_name, customer_email, fk_movieTime_id, fk_ticket_Type_id, fk_payment_id, adult_qty, child_qty, concession_qty, movie_date, movie_time, fk_movie_id, fk_screen_id) VALUES ("${customerName}", "${customerEmail}", ${movieTimeId}, ${ticketTypeId}, ${paymentId}, ${adultQuantity}, ${childQuantity}, ${concessionQuantity}, "${movieDate}", ${movieTime}, ${movieId}, ${screenId})`;
  console.log(hello);
  connection.query(hello, function (err, result, fields) {
    // console.log(result);
    if (err) {
      console.log(err);
    } else {
      // let finalBooking = JSON.parse(result);
      res.send(result);
    }
  });
};

module.exports = {
  getMovieTimes,
  getMakeBookingData,
  getTimesAndBookings,
  postBooking,
};
