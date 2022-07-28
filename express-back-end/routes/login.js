const express = require('express');
const router  = express.Router();

//Password Encryption
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = (db) => {
  router.post("/", (req, res) => {
    values = [req.body.email]
    db.query(`SELECT * FROM users
    WHERE email = $1`, values)
      .then((data)=> {

        console.log(data.rows)

        if(data.rows.length !== undefined) {
          bcrypt.compare(req.body.password, data.rows[0].password, (error, response) => {
            if(response) {
              res.send(data);
            } else {
              res.send({message: "Password didn't match"})
            }
          })

        }else {
          res.send({message: "User not found"})
        }

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
