const express =  require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

// App is initialised
const app = express();

// initialised middlewares
app.use(expressLayout);
app.use(express.static('src'));
app.set("view engine", "ejs")


// All get requests
app.get('/', (req, res) => {
    res.render('Homepage');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/mixtape', (req, res) => {
    res.render("mixtape")
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get("/gallery", (req, res)=> {
    res.render("gallery");
})
app.get("/music", (req, res) => {
    res.render("music")
})

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`app started on ${port}`));