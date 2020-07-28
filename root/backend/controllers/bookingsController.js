const connection = require("../models/db");

const getMovieTimes = async (req, res, next) => {
  connection.query("SELECT * FROM MovieTime", function (err, results, fields) {
    return res.json(results);
  });
};

const getMakeBookingData = async (req, res, next) => {
  const selectStartTimeAndScreenId = `SELECT start_time, fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id}`;

  connection.query(selectStartTimeAndScreenId, function (err, result, fields) {
    return res.json(result);
  });
};

module.exports = { getMovieTimes, getMakeBookingData };
