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

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get("/gallery", (req, res)=> {
    res.render("gallery");
})


const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`app started on ${port}`));