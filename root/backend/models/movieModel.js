// database connection
const connection = require("./db");

exports.selectMovies = () => {
  return connection.query("SELECT * FROM movie").then((res) => {
    return res.rows;
  });
};
