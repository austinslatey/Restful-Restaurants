const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
// const session = require('express-session');
// const logger = require("morgan");
const indexRouter = require("./routes/index");

//express and port 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

//routes
//root

//restaurant routes
const restaurantsModule = require("./routes/restaurants");
const restaurantsRouter = restaurantsModule.router;
//starred route
const starredRestaurantsRouter = require("./routes/starredRestaurants")

//changing app.use to render files
// app.use(cors());


// Use apiRoutes
app.use("/", indexRouter);
app.use("/restaurants/starred", starredRestaurantsRouter);
app.use("/restaurants", restaurantsRouter);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });

module.exports = app;
