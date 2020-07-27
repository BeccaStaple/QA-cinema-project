const connection = require("../models/db");

const getMovieTimes = async (req, res, next) => {
  connection.query("SELECT * FROM MovieTime", function (err, results, fields) {
    console.log(results);
    return res.json(results);
  });
};

module.exports = getMovieTimes;
