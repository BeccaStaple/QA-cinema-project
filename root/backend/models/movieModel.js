// database connection
const connection = require("./db");

const selectMovies = async () => {
  connection.query("SELECT * FROM movie", function (err, results, fields) {
    return results;
  });
};

// function selectMovies() {
//   connection.connect(function (err) {
//     if (err) console.log(err);
//     return connection.query("SELECT * FROM movie").then((err, res) => {
//       if (err) console.log(err);
//       console.log(JSON.stringify(res));
//       //return res;
//     });
//   });
// }

// connection.connect(function (err) {
//   if (err) console.log(err);
//   return connection.query("SELECT * FROM movie", function (err, result) {
//     if (err) console.log(err);
//     console.log(JSON.stringify(result));
//     return result;
//   });
// });

module.exports = { selectMovies };
