const express = require('express');
const override = require('method-override');
const parser = require('body-parser');
const exphbs = require("express-handlebars");

const burgerRoutes = require('./controllers/burgers_controllers.js');

const app = express();
const port = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// handlerbars engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// serves up static assets
app.use(express.static('public'));

// include the plan routes from the controller
app.use(burgerRoutes);

app.listen(port, function() {
    console.log("listening on port", port);
});