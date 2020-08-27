const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.use((req,res) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
})

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi find eggs', snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'},
        {title: 'Mario find stars', snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'},
        {title: 'How to defeat bower', snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'},
    ]
    res.render('index', {title: 'Home', blogs});
});


app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'});
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Error!'});
});