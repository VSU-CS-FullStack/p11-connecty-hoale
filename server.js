// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const users = require("./routes/api/users");
// const profiles = require("./routes/api/profiles");
// const posts = require("./routes/api/posts");
// const passport = require("passport");
// const app = express();

// // Allow you to perform cross-domain Ajax requests in web applications.
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// // Body parser middeware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // DB config

// const db = require("./config/keys").mongoURI;

// // Connect to MongoDB

// mongoose
//     .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log(err));

//     // app.get("/", (req, res) => res.send("hello!"));

// // Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

//     // Use routes
//     app.use("/api/users", users);
//     app.use("/api/profiles", profiles);
//     app.use("/api/posts", posts);
// // The actual port for the app in prodcution will come from the env. var. "PORT". For local dev., we just use 8080.
// const port = process.env.PORT || 8080;

// app.listen(port, () => console.log(`Server running on port ${port}`));



//RESTARTED
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");
const passport = require("passport");
const app = express();

// Allow you to perform cross-domain Ajax requests in web applications.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Body parser middeware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    // app.get("/", (req, res) => res.send("hello!"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
    // Use routes
    app.use("/api/users", users);
    app.use("/api/profiles", profiles);
    app.use("/api/posts", posts);
// The actual port for the app in prodcution will come from the env. var. "PORT". For local dev., we just use 8080.
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));