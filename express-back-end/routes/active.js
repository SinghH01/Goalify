const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    let values = [req.body.id]

    db.query(`SELECT goals.*
    FROM goals
    JOIN users_goals ON users_goals.goal_id = goals.id
    JOIN users ON users.id = users_goals.user_id
    WHERE users.id = $1;`, values)
      .then(data => {

        const goals = data.rows;
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