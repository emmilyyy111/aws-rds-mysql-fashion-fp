const mysql = require('mysql') // importing mysql library we added from npm
const { dbconfig } = require('../dbconfig') // uses our secrets
const { secret } = require('../secrets')
const db = mysql.createConnection(dbconfig) // makes connection
db.connect() // opens connection

// exports.getAllUsers = (req, res) => { 
//   const db = mysql.createConnection(dbconfig)
//     db.connect()
//         db.query(`SELECT * FROM user_profile`, (err, rows) => {
//             if (err) {
//               console.log(err)
//               res.status(500).send(err)
//               return
//             }
//             res.send(rows)
//           })
//           db.end()
// };

exports.userSignin = (req, res) => {
  const db = mysql.createConnection(dbconfig);
  db.connect();
  const { email, password } = req.body 
    db.query(`SELECT * FROM user_profile WHERE email="${email}" AND password="${password}";`,
     (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    };
    res.send(rows);
  });
  db.end();
}

exports.createNewUser = (req, res) => {
  const db = mysql.createConnection(dbconfig)
    db.connect()
    const { fname, lname, age, email, password } = req.body
    
    db.query( `INSERT INTO user_profile (fname, lname, age, email, password) VALUES ("${fname}", "${lname}", "${age}", "${email}", "${password}");`,
      (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
        }
      )
      db.end()
}
  
exports.deleteUser = ({ query: { fname, lname } }, res) => {
  const db = mysql.createConnection(dbconfig)
    db.connect()
    const deleteUser = `DELETE FROM user_profile WHERE fname = "${fname}" AND lname = "${lname}"`;
      db.query(deleteUser, (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
          })
          db.end()
}

exports.updateUserAge = ({ body: { newAge, fname, lname } }, res) => { // object destructuring (req.body.oldFName)
  const db = mysql.createConnection(dbconfig) 
  const name = (fname && lname)
    db.connect()
    const updateU = `UPDATE user_profile SET age = ${newAge} WHERE name = "${fname}" AND "${lname}"`;
      db.query(updateU, (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
          })
          db.end()
}