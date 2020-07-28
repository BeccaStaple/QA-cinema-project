const connection = require("../models/db");

const getMovies = async (req, res, next) => {
  connection.query("SELECT * FROM movie", function (err, results, fields) {
    return res.json(results);
  });
};

const getStartTimeByID1 = async (req, res, next) => {
  connection.query(
    "SELECT start_time FROM MovieTime WHERE fk_movie_id = 1;",
    function (err, results, fields) {
      return res.json(results);
    }
  );
};

module.exports = { getMovies, getStartTimeByID1 };
