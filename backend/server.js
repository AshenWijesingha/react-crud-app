let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let createError = require("http-errors");

// Express Route
const customerRoute = require("./routes/customer.routes");

// Connecting to MongoDB Database
mongoose
  .connect(
    "mongodb+srv://ashen:ashen@eye-care-cluster.8fkbk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.reason);
  });

const app = express();

// Use built-in Express middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ 
    extended: true 
  }),
);
app.use(cors());
app.use("/customers", customerRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
