const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// GET BACK ALL THE POSTS
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find(); //gets all posts
        res.json(posts);
    }catch(err){
        res.json({ message: err })
    }
});

// SUBMIT A POST
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost)
    }catch(err){
        res.json({ message: err })
    }
});

// SPECIFIC POST
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId); //gets all posts
        res.json(post);
    }catch(err){
        res.json({ message: err })
    }
});

// Delete Post
router.delete('/:postId', async (req,res) => {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.postId);
        res.json(removedPost);
    }catch(err){
        res.json({ message: err});
    }
});


module.exports = router;