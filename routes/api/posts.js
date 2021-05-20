const router = require('express').Router();
const { check, validationResult } = require('express-validator');

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

router.get('/:postId', async (req, res) => {
  const post = await Post.findOne({
    where: { id: req.params.postId },
  });

  if (post) {
    res.status(200).json({
      data: post,
      message: 'Post listed',
    });
  } else {
    res.status(404).json({
      message: 'the post does not exist',
    });
  }
});

router.post(
  '/',
  [
    check('titulo', 'The title is required').not().isEmpty(),
    check('contenido', 'The contents is required').not().isEmpty(),
    check('imagen', 'The image is required').not().isEmpty(),
    check('categoria', 'The category is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }
    const post = await Post.create(req.body);
    res.status(200).json({
      data: post,
      message: 'post created',
    });
  }
);

module.exports = router;
