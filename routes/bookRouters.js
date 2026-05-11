const { fetchBooks,addBooks,deleteBooks,editBooks, singleFetchBooks  } = require("../controllers/bookController")

const router = require("express").Router() // express ko router lai require gareko xa-- router le chai hamro api ko route handle garna help garcha and  Router() le chai router ko object create garna help garcha

router.route("/").get(fetchBooks).post(addBooks)
router.route("/:id").delete(deleteBooks).patch(editBooks).get(singleFetchBooks)  // restful api
// router.get("/books",fetchBooks)
// router.post("/books",addBooks)
// router.delete("/books/:id",deleteBooks)








module.exports = router