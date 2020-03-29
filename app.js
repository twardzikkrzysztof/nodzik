// var functions = require("./logic/functions");

// functions.sayHello()
// console.log(functions.sum(3, 2));

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const newVariables = require("./js/func");
app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

const sample = () => {
    return "proba"
}


app.get("/", function (req, res) {
    // res.send("Hello World")
    res.render("index",
        {
            pageTitle: "Lekcja01",
            sampleText: newVariables.someTitle,
            thirdTitle: sample()
        })
})

app.get("/about", function (req, res) {
    res.send("my site")
})

app.listen(port, (err) => {
    if (err) { return console.log("Error: ", err) }
    console.log("serwer działa na porcie " + port);
});