const express = require("express"); // express lai require or import gareko
const bookRoute = require("./routes/bookRouters")
const cors = require("cors")


const app = express() // express lai trigger gareko or call
require("./database/connection");
app.use(cors({
    origin : "http://localhost:5173" // frontend ko url ho yo-- frontend le chai backend sanga communicate garna milos vanera cors use gareko xa
}))
app.use(express.json())

//localhost:5000//api + /books/ = localhost:5000/api/books
app.use("/api/books", bookRoute)

app.listen(5000,()=>{
    console.log("my node projec is started at port 5000")
})