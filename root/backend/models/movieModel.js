// database connection
const connection = require("./db");

const selectMovies = () => {
  return connection.query("SELECT * FROM movie").then((res) => {
    return res.rows;
  });
};

connection.connect(function (err) {
  if (err) console.log(err);
  return connection.query("SELECT * FROM movie", function (err, result) {
    if (err) console.log(err);
    console.log(result);
    return result;
  });
});

module.exports = selectMovies;
