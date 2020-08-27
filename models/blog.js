const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Migration table (Schema)
const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, {timestamps: true});

// Model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;