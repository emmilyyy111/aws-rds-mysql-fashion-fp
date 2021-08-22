const mysql = require('mysql'); // importing mysql library we added from npm
const { uuid } = require('uuidv4');
const { dbconfig } = require('../dbconfig'); // uses our secrets
const db = mysql.createConnection(dbconfig); // makes connection
db.connect(); // opens connection

exports.getAllUsers = (req, res) => {
  // function so i personally can see my users
  const db = mysql.createConnection(dbconfig);
  db.connect();
  db.query(`SELECT * FROM user_profile`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
  db.end();
};

// exports.getSingleUser = (req, res) => {
//   const db = mysql.createConnection(dbconfig);
//   db.connect();
//   db.query(`SELECT * FROM user_profile WHERE `, (err, rows) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//       return;
//     };
//     res.send(rows);
//   });
//   db.end();
// }

exports.createNewUser = (req, res) => {
  const db = mysql.createConnection(dbconfig);
  db.connect();
  const newUser = `INSERT INTO user_profile (id, fname, lname, age) VALUES (${uuid}, 'fname', 'lname', 'age')`;
  db.query(newUser, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
  db.end();
};

exports.deleteUser = ({ query: { fname, lname } }, res) => {
  const db = mysql.createConnection(dbconfig);
  db.connect();
  const deleteUser = `DELETE FROM user_profile WHERE fname = "${fname}" AND lname = "${lname}"`;
  db.query(deleteUser, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
  db.end();
};

exports.updateUserAge = ({ body: { newAge, fname, lname } }, res) => {
  // object destructuring (req.body.oldFName)
  const db = mysql.createConnection(dbconfig);
  const name = fname && lname;
  db.connect();
  const updateU = `UPDATE user_profile SET age = ${newAge} WHERE fname = "${fname}" AND lname = "${lname}"`;
  db.query(updateU, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
  db.end();
};
//# sourceMappingURL=users.js.map