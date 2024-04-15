const express = require("express");
const app = express();

app.post("/submit", (req, res, next) =>{
    res.send(req.url + Test)
});
app.use("/",(req, res, next) =>{
    res.send(`
    <form action= "/submit" method="POST">
    <input name = "data"/>
    <button>Submit</button>
    </form>
    `);
   
});

app.listen(3000);