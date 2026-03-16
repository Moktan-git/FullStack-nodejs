const express = require("express"); // express lai require or import gareko
const bookRoute = require("./routes/bookRouters")


const app = express() // express lai trigger gareko or call
require("./database/connection");
app.use(express.json())



//localhost:5000//api + /books/ = localhost:5000/api/books
app.use("/api/books", bookRoute)

app.listen(5000,()=>{
    console.log("my node projec is started at port 5000")
})