const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM milestones where goal_id = $1;`,[
      req.params.id
    ])
      .then(data => {
        console.log(data.rows)
        const milsestones = data.rows;
        res.json( milsestones );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};