const connection = require("../models/db");

const getMovieTimes = async (req, res, next) => {
  connection.query("SELECT * FROM MovieTime", function (err, results, fields) {
    return res.json(results);
  });
};

const getTimesAndBookings = async (req, res, next) => {
  const data = {
    bookings: [],
    screens: []
  }
  const selectStartTimeAndScreenId = ` SELECT start_time, fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id}`;


  connection.query(selectStartTimeAndScreenId, function (err, results, fields) {
    if(err) return next(err);
    data.bookings = results;
    const ids = data.bookings.map(booking => booking.fk_theatre_Screen_id);
    const uniqueIds = [...new Set(ids)].join(', ');

    connection.query(`SELECT * FROM screen where theatre_Screen_id in (${uniqueIds})`, function (err, screensResults, fields) {
      if(err) return next(err);
      data.screens = screensResults;
      res.json(data);
    });
  });

}
const getMakeBookingData = async (req, res, next) => {
  const selectStartTimeAndScreenId = ` SELECT start_time, fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id}`;

  connection.query(selectStartTimeAndScreenId, function (err, result, fields) {
    return res.json(result);
  });
};

module.exports = { getMovieTimes, getMakeBookingData, getTimesAndBookings };
