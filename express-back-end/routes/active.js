const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    let values = [req.body.id];

    db.query(
      `SELECT goals.*
    FROM goals
    JOIN users_goals ON users_goals.goal_id = goals.id
    JOIN users ON users.id = users_goals.user_id
    WHERE users.id = $1;`,
      values
    )

      .then((data) => {
        let goals = data.rows;
        res.json(goals);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/add", (req, res) => {
    let values = [req.body.userId, req.body.goalId];

    db.query(
      `INSERT INTO users_goals (user_id, goal_id)
    VALUES ($1, $2)`,
      values
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
        }, 1000);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/delete", (req, res) => {
    console.log(req.body);
    db.query(
      `DELETE FROM users_goals
    WHERE user_id = $1 AND goal_id = $2;`,
      [req.body.userId, req.body.goalId]
    ).then(() => {
      setTimeout(() => {
        res.status(204).json({});
      }, 1000);
    });
  });

  //Fetch members of speciic goals
  router.post("/goal_members", (req, res) => {
    let values = [req.body.goalId];

    db.query(
      `SELECT users.id,users.first_name, users.avatar
    FROM users_goals
    JOIN users ON users.id = users_goals.user_id
    WHERE users_goals.goal_id = $1`,
      values
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
