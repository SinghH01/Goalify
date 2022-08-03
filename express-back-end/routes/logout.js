const express = require('express');
const router = express.Router();





module.exports = (db) => {

  router.get("/", (req, res) => {
    // if (req.session.user) {
    //   res.send({ loggedIn: true, user: req.session.user })
    // } else {
    //   res.send({ loggedIn: false })
    // }
    req.session.destroy()
    res.send({ loggedIn: false })

  })
  return router;
};
