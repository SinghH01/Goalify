const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM milestones;`)
      .then(data => {
        const milsestones = data.rows;
        res.json( milsestones );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/user_milestones", (req, res) => {
    values =[ req.body.milestoneId, req.body.userId]
    db.query(`UPDATE users_milestones
    SET completed = true
    WHERE milestone_id = $1 AND user_id = $2 ;`, values)
      .then(() => {
        res.send({Message: "Updated Successfully"})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM milestones where goal_id = $1;`,[
      req.params.id
    ])
      .then(data => {
        const milsestones = data.rows;
        res.json( milsestones );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/add/:id", (req, res) => {
    const values = [req.params.id, req.body.title, req.body.description, req.body.end_date]
    db.query(`INSERT INTO milestones (goal_id, title, description, end_date)
      VALUES ($1, $2, $3, $4)`, values)
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
        }, 1000);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.delete("/delete/:id", (req, res) => {
    db.query(`DELETE FROM milestones
    WHERE id = $1;`, [
      req.params.id
    ])
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
        }, 1000);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
