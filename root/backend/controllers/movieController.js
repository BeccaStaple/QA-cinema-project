const connection = require("../models/db");

const getMovies = async (req, res, next) => {
  connection.query("SELECT * FROM movie", function (err, results, fields) {
    return res.json(results);
  });
};

const getStartTimeById = async (req, res, next) => {
  connection.query(
    `SELECT start_time FROM MovieTime WHERE fk_movie_id = ${req.params.id};`,
    function (err, results, fields) {
      return res.json(results);
    }
  );
};

module.exports = { getMovies, getStartTimeById };
