const express = require("express");
const { books } = require("./database/connection");
const app = express()

require("./database/connection");
app.use(express.json())

app.get("/books",async function(req,res){
    // logic code to fetch goes here

    const datas = await books.findAll() //slect * from books--querry ma books.find()--> mongoose ma 

    res.json({
        messsage: "Book Fetched SuccessFully",
        datas  // js ma key ra value same vaye-- datas matra lekhda hunxa
    })
})

app.post("/books",async function(req,res){
    // logic code goes here
    
console.log(req.body)
// const bookName = req.body.bookName
// const bookPrice = req.body.bookPrice
const {bookName,bookPrice, bookAuthor, bookGenre} = req.body;
// check if all the dataaako xa vane proceed, esle not proceed throw error
await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
});

    res.json({
        messsage: "Book Added SuccessFully"
    })
})
app.patch("/books/:id",function(req,res){
    // logic code goes here

    res.json({
        messsage: "Book Updated SuccessFully"
    })
})
app.delete("/books/:id",function(req,res){
    // logic code goes here

    res.json({
        messsage: "Book Deleted SuccessFully"
    })
})




app.listen(5000,()=>{
    console.log("my node projec is started at port 5000")
})