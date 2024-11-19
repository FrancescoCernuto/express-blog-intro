const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
      title: "Ciambellone",
      content: "lorem ipsum sit amet",
      img: "./public/images/ciambellone.jpeg",
      tags: ["ricetta", "ciambellone"],
    },

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})