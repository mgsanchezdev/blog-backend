const router = require('express').Router();

const { Post } = require('../../db');

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    attributes: { exclude: ['contenido', 'updatedAt'] },
    order: [['createdAt', 'DESC']],
  });

  res.status(200).json({
    data: posts,
    message: 'Posts listed',
  });
});

module.exports = router;
