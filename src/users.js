const mysql = require('mysql') // importing mysql library we added from npm
const { dbconfig } = require('../dbconfig') // uses our secrets
const db = mysql.createConnection(dbconfig) // makes connection
db.connect() // opens connection

exports.getAllUsers = (req, res) => {
  const db = mysql.createConnection(dbconfig)
    db.connect()
        db.query(`SELECT * FROM user_profile`, (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
          })
          db.end()
}

exports.createNewUser = (req, res) => {
  const db = mysql.createConnection(dbconfig)
    db.connect()
    const newUser = "INSERT INTO user_profile (fname, lname, clothes_size, age) VALUES ('Jessica', 'Terrill', 'medium', '28')";
      db.query(newUser, (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
          })
          db.end()
}

exports.deleteUser = (req, res) => {
  const db = mysql.createConnection(dbconfig)
    db.connect()
    const deleteUser = "DELETE FROM user_profile WHERE fname = 'Jessica'";
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

exports.updateUser = (req, res) => {

  const db = mysql.createConnection(dbconfig)
    
    db.connect()
    const updateU = "UPDATE user_proile SET id = '3' WHERE id = '10'";
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