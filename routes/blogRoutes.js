const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// Routes
router.get('/', blogController.index);

router.get('/create', blogController.create);

router.post('/', blogController.store);

router.get('/:id', blogController.show);

router.delete('/:id', blogController.blog_delete);

module.exports = router;