require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { getStoredPosts, storePosts } = require('./data/posts');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const PORT = process.env.PORT;

app.get('/posts', async (req, res) => {
  const storedPosts = await getStoredPosts();
  res.json({ posts: storedPosts });
});

app.get('/posts/:id', async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post('/posts', async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: 'Stored new post.', post: newPost });
});

app.delete('/posts/:id', async (req, res) => {
  const postIdToDelete = req.params.id;
  const existingPosts = await getStoredPosts();
  const updatedPosts = existingPosts.filter(post => post.id !== postIdToDelete);
  await storePosts(updatedPosts);
  res.status(200).json({ message: 'Post deleted successfully', posts: updatedPosts });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
