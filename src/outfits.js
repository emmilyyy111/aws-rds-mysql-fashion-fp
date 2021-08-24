const mysql = require('mysql') // importing mysql library we added from npm
const { dbconfig } = require('../dbconfig') // uses our secrets
const db = mysql.createConnection(dbconfig) // makes connection
db.connect()

exports.getAllOutfits = (req, res) => { // add get all photos 
    const db = mysql.createConnection(dbconfig)
      db.connect()
          db.query(`SELECT * FROM outfits`, (err, rows) => {
              if (err) {
                console.log(err)
                res.status(500).send(err)
                return
              }
              res.send(rows)
            })
            db.end()
  };

exports.getOutfitsByStyle = ({ params: { style } }, res) => { 
  const db = mysql.createConnection(dbconfig)
    db.connect()
        db.query(`SELECT * FROM outfits WHERE style_id = ("${style}")`, (err, rows) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
              return
            }
            res.send(rows)
          })
          db.end()
};