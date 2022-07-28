const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM goals;`)
      .then(data => {
        console.log(data.rows)
        const goals = data.rows;
        console.log(typeof goals)
        res.json( goals );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

