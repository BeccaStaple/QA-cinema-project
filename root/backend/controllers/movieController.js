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

const getScreenByMovieId = async (req, res, next) => {
  connection.query(
    `SELECT fk_theatre_Screen_id FROM MovieTime WHERE fk_movie_id = ${req.params.id};`,
    function (err, results, fields) {
      return res.json(results);
    }
  );
};

// select fk_theatre_Screen_id from MovieTime where fk_movie_id=1;

module.exports = { getMovies, getStartTimeById, getScreenByMovieId };
