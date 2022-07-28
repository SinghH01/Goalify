const express = require('express');
const router  = express.Router();

//Password Encryption
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = (db) => {
  router.post("/", (req, res) => {
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if(err) {
        console.log(err)
      }

      values = [req.body.firstname, req.body.lastname, req.body.email, hash,'https://cdn-icons-png.flaticon.com/512/4333/4333609.png']
      db.query(`INSERT INTO users (first_name, last_name, email, password, avatar)
      VALUES ($1, $2, $3, $4, $5)`, values)
        .then(()=> {
          console.log("User added to the database");
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });

    })
  });
  return router;
};
