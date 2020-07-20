const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const compression = require("compression");

const cors = require('cors');

// Constants
const { PORT } = require("./config");

// Database
const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Successfully connected to database."))
  .catch(err => {
    console.log("An error occurred while trying to connect to database.", err);
  });
db.sync();

let app = express();
app.use(cors({
  origin: function (origin, callback) {
    callback(null, true)
  },
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("assets"));
app.use(compression());

require("./routes")(app);

const port = PORT || 8000;

app.listen(port, function () {
  console.log(
    "[API-CHROME-EXTENSION-TEMPLATE] app is listening on port " + port + "."
  );
});
