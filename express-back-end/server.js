// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")

//user-session
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')


//Password Encryption
const bcrypt = require('bcrypt')
const saltRounds = 10

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
  key: "userId",
  secret: "userSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    express: 60 * 60 * 24,
  },
}))

app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const logoutRoutes = require("./routes/logout");
const goalsRoutes = require("./routes/goals");
const milestonesRoutes = require("./routes/milestones");
const favouritesRoutes = require("./routes/favourites");
const activeRoutes = require("./routes/active");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/logout", logoutRoutes(db));
app.use("/api/goals", goalsRoutes(db));
app.use("/api/milestones", milestonesRoutes(db));
app.use("/favourites", favouritesRoutes(db));
app.use("/favourites/like", favouritesRoutes(db));
app.use("/favourites/dislike", favouritesRoutes(db));
app.use("/favourites/check", favouritesRoutes(db));
app.use("/active", activeRoutes(db));



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
