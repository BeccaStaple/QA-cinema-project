// import models
const selectMovies = require("../models/movieModel");

exports.getMovies = (req, res) => {
  selectMovies().then((movies) => {
    res.send(movies);
  });
};
