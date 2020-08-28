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
    .then((result) => app.listen(8000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));

// 3rd party middleware package
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});


// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('index', {
                title: 'All Blogs',
                blogs: result
            });
        })
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create Blog'
    });
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', {
                blog: result,
                title: 'Blog Details'
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 Error!'
    });
});