const router = require('express').Router();

const apiPostsRouter = require('./api/posts.js');

router.use('/posts',apiPostsRouter);


module.exports = router