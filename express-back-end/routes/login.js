const express = require("express");
const router = express.Router();

//Password Encryption
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (db) => {
  router.get("/", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

  router.post("/", (req, res) => {
    values = [req.body.email];
    db.query(
      `SELECT * FROM users
    WHERE email = $1`,
      values
    )
      .then((data) => {
        if (data.rows.length !== undefined) {
          bcrypt.compare(
            req.body.password,
            data.rows[0].password,
            (error, response) => {
              if (response) {
                req.session.user = data;
                console.log(req.session.user);
                res.send(data);
              } else {
                res.send({ message: "Password didn't match" });
              }
            }
          );
        } else {
          res.send({ message: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
