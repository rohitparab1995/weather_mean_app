const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Weather = require('../backend/models/weatherModel');

const app = express();

mongoose.connect('mongodb://localhost/myapp')
.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/storeWeather", (req, res, next) => {
  const post = new Weather({
    city: req.body.city,
    temp: req.body.temp,
    lat: req.body.lat,
    lon: req.body.lon,
    curdate : new Date()
  });

  post.save().then(createdWeather => {
    res.status(201).json({
      message: "Data added successfully",
      weatherId: createdWeather._id
    });
  });

  console.log("From express app:");
  console.log(post);
  res.status(201).json({
    message: 'Data added successfully'
  });
});

/* app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
}); */

module.exports = app;
