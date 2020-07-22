// import models
const selectMovies = require("../models/movieModel");

const getMovies = (req, res, next) => {
  selectMovies().then((movies) => {
    res.send(movies);
  });
};

module.exports = getMovies;
