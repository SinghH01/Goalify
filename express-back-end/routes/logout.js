const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    req.session.destroy();
    res.send({ loggedIn: false });
  });
  return router;
};
