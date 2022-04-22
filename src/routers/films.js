const data = require('../../data.js')
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
   res.json({ films: data.films });
 });

router.get("/:id", (req, res) => {
   const film = data.films.find((film) => film.id == req.params.id);
   if (!film) {
     res.json("No film with ID!");
   }
   res.json({ film: film });
 });

 router.delete("/:id", (req, res) => {
   let remove;
   data.films = data.films.filter((film) => {
     if (film.id !== req.params.id) {
      remove = "No film with ID!";
      return true;
     } else {
      remove = film;
      return false;
     }
   });
   res.json({ user: remove });
 });

 router.put("/:id", (req, res) => {
   let book = books.find(book => book.id == id)
   let id = req.params.id
   if (!book) {
     res.status(404)
     res.json({ error: "No film with ID!" })
     return
   }
   res.json({ book: book })
})

module.exports = router