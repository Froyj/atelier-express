const express = require('express')
const router = express.Router()
const myPosts = require('../posts');

router.get('/', (req, res) => {
  res.status(200).json(myPosts);
})

router.get('/:id', (req, res) => {
  const postToReturn = myPosts.find(post => post.id === Number(req.params.id))
  if(postToReturn ) {
    res.status(200).json(postToReturn);
  } else {
    res.status(404).send('No resource found');
  }
})

router.post('/', (req, res) => {
  const comment = req.body;
  const idToAdd = myPosts[myPosts.length-1].id + 1;
  comment.id = idToAdd;
  myPosts.push(comment);
  res.status(201).json(comment)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const indexToDelete = myPosts.findIndex(post => post.id === Number(id))
  myPosts.splice(indexToDelete, 1);
  res.sendStatus(204);
})


module.exports = router; 