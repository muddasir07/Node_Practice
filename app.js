const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const formRoute = require("./routes/form");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/form", formRoute);
app.use("/", (req, res) => {
    res.send("wel Express");
});

app.listen(3000);