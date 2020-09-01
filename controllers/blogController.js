const Blog = require('../models/blog');

const index = (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('blog/index', {
                title: 'All Blogs',
                blogs: result
            });
        })
}

const create = (req, res) => {
    res.render('blog/create', {
        title: 'Create Blog'
    });
}

const store = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
}

const show = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blog/details', {
                blog: result,
                title: 'Blog Details'
            });
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Blog not found'});
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({
                redirect: '/blogs'
            })
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    index,
    create,
    store,
    show,
    blog_delete
};