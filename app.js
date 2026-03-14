const express = require("express")
const app = express()

require("./database/connection")


app.get("/books",function(req,res){
    res.json({
        messsage: "Book Fetched SuccessFully"
    })
})
app.post("/books",function(req,res){
    res.json({
        messsage: "Book Added SuccessFully"
    })
})
app.patch("/books/:id",function(req,res){
    res.json({
        messsage: "Book Updated SuccessFully"
    })
})
app.delete("/books/:id",function(req,res){
    res.json({
        messsage: "Book Deleted SuccessFully"
    })
})






app.listen(5000,()=>{
    console.log("my node projec is started at port 5000")
})