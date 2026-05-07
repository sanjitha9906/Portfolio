const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/blindspot", (req, res) => {
  res.render("blindspot");
});

app.get("/carpool", (req, res) => {
  res.render("carpool");
});

app.get("/doorlock", (req, res) => {
  res.render("doorlock");
});

app.get("/hackathons", (req, res) => {
    res.render("hackathons");
});

app.get("/courses", (req, res) => {
    res.render("courses");
});

app.get("/workshops", (req, res) => {
    res.render("workshops");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});