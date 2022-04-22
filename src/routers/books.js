// Import data here...
const data = require('../../data.js')
const express = require('express')
const router = express.Router()

// Write routes here...
router.get("/", (req, res) => {
   res.json({books: data.books})
 })

 router.delete("/:id", (req, res) => {
   let remove;
   data.books = data.books.filter((book) => {
     if (req.params.id === book.id) {
       remove = book;
       return false;
     } else {
       deleteBook = "No book with ID!";
       return true;
     }
   });
   res.json({ book: remove });
 });

 router.put("/:id", (req, res) => {
  let book = books.find(book => book.id == id)
  let id = req.params.id
  if (!book) {
    res.status(404)
    res.json({ error: "No book with ID!" })
    return
  }
  res.json({ book: book })
})

module.exports = router