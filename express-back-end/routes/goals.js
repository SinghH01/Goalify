const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});

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
        res.json(goals);
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
    const values = [req.params.id, req.body.title, req.body.description, req.body.image, req.body.start_date, req.body.end_date]
    db.query(`INSERT INTO goals (user_id, title, description, image, start_date, end_date)
      VALUES ($1, $2, $3, $4, $5,$6)`, values)
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

  // POST route for delete Goal
  router.delete("/delete/:id", (req, res) => {
    db.query(`DELETE FROM goals
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

  // Put route for update Goal
  router.put("/edit/:id", (req, res) => {
    db.query(`UPDATE goals SET title = $1, description = $2, image=$3, start_date=$4, end_date=$5
     WHERE id = $6;`,
      [req.body.title, req.body.description, req.body.image, req.body.start_date, req.body.end_date, req.params.id
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

