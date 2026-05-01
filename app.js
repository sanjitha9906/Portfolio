const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/certificates', (req, res) => {
    res.render('certificates');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});