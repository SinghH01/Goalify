const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM goals;`)
      .then(data => {
        console.log(data.rows)
        const goals = data.rows;
        console.log(typeof goals)
        res.json(goals);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/goal_location/:id", (req, res) => {
    db.query(`SELECT * FROM goals_locations where goal_id = $1;`, [
      req.params.id
    ])
      .then(data => {
        const goalLocation = data.rows;
        res.json(goalLocation);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/individualgoal", (req, res) => {
    let values = [req.body.id]

    db.query(`SELECT goals.*
    FROM goals WHERE id = $1;`, values)
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


  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM goals where user_id = $1;`, [
      req.params.id
    ])
      .then(data => {
        const userGaols = data.rows;
        res.json(userGaols);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    const values = [req.params.id, req.body.title, req.body.description,req.body.image, req.body.start_date, req.body.end_date]
    db.query(`INSERT INTO goals (user_id, title, description, image, start_date, end_date)
      VALUES ($1, $2, $3, $4, $5,$6)`, values)
      .then(()=> {
        console.log("goal added to the database");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });




  return router;
};

