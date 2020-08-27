const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

const dbURI = 'mongodb+srv://kultosh:D4s7SXLLbXXix6u@nodebegining.7hs8n.mongodb.net/node-fresh?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
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

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'How to defeat bower',
        snippet: 'Occaecat excepteur qui non incididunt proident cupidatat commodo.',
        body: 'Quis commodo sunt cillum sit incididunt qui. Quis exercitation id est amet sint sunt. Incididunt anim anim minim cillum ipsum Lorem consectetur dolore.Irure ullamco ad qui nisi ut fugiat non quis veniam pariatur est do pariatur.Et velit magna amet tempor esse laborum reprehenderit velit dolor aute officia excepteur voluptate nulla.Magna cillum irure minim eu minim.'
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('5f47d7f34206d826bf2ab0fe')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 Error!'
    });
});