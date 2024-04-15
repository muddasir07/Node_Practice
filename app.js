const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const formRoute = require("./routes/form");

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/form", formRoute);
app.use("/", (req, res) => {
    res.render("home", {user: "Muddasir"});
});

app.listen(3000);