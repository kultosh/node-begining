const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// express app
const app = express();

const dbURI = 'mongodb+srv://kultosh:D4s7SXLLbXXix6u@nodebegining.7hs8n.mongodb.net/node-fresh?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
// register view engine
app.set('view engine', 'ejs');

// listen for requests

// middleware and static files
app.use(express.static('public'));

// 3rd party middleware package
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [{
            title: 'Yoshi find eggs',
            snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'
        },
        {
            title: 'Mario find stars',
            snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'
        },
        {
            title: 'How to defeat bower',
            snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.'
        },
    ]
    res.render('index', {
        title: 'Home',
        blogs
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create Blog'
    });
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 Error!'
    });
});