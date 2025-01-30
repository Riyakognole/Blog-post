const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create a post
router.post('/', async (req, res) => {
  try {
    const { title, imageUrl, description } = req.body;
    const newPost = new Post({ title, imageUrl, description });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;