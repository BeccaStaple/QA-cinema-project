// import models
const { selectMovies } = require("../models/movieModel");
const connection = require("../models/db");

const getMovies = async (req, res, next) => {
  connection.query("SELECT * FROM movie", function (err, results, fields) {
    return res.json(results);
  });
};

module.exports = getMovies;
