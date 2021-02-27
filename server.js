var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;
var fs = require("fs");

app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})

app.get("/cwiczenia", function (req, res) {
    let all = {
        dirs: []
    }
    let cwiczenia = fs.readdirSync(__dirname + "/static/cwiczenia/");
    cwiczenia.forEach(dir => {
        let cw = fs.readdirSync(__dirname + "/static/cwiczenia/" + dir);

        all.dirs.push(cw)
    });
    console.log(all);

    res.send(all)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})