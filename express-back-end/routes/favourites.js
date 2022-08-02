const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    let values = [req.body.id]

    db.query(`SELECT goals.*
    FROM goals
    JOIN favourites_goals ON favourites_goals.goal_id = goals.id
    JOIN users ON users.id = favourites_goals.user_id
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

  router.post("/like", (req, res) => {
    let values = [req.body.userId, req.body.goalId]
    console.log("===========")
    console.log(req.body.userId)
    console.log(req.body.goalId)

    console.log("===========")
    db.query(`INSERT INTO favourites_goals (user_id, goal_id)
    VALUES ($1,$2);`, values)
      .then(() => {

        res.json( {message: 'Goal added to favourites successfully'} );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};

