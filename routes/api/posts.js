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

router.get('/:postId', async (req, res) => {
    const posts = await Post.findOne({
      where: { id: req.params.postId },
    });

    if(posts){
        res.status(200).json({
            data: posts,
            message: 'Post listed',
          });
    }else{
        res.status(404).json({
            message: 'the post does not exist',
          });
    }
    
});

module.exports = router;
