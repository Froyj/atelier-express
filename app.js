const express = require('express');
const app = express();
const postsRouter = require('./routes/postsRouter')
const port = 4001;

app.disable('etag');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("My Blog App")
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})