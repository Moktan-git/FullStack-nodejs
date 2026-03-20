// book

const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    // logic code to fetch goes here

    const datas = await books.findAll() //slect * from books--querry ma books.find()--> mongoose ma 

    res.json({
        messsage: "Book Fetched SuccessFully",
        datas  // js ma key ra value same vaye-- datas matra lekhda hunxa
    })
}

exports.addBooks = async function(req,res){
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
}


exports.deleteBooks = async function(req,res){
    // first ma kun book delete garne vanera id capture garne
    // id paisakepaxi tyo id ko book chai book table baata delete garni..
    const id = req.params.id;
    //const {id} = req.body // const {id} = req.params  --destructuring gareko
    await books.destroy({
        where : {
            id
        }
    
    })
    // id capture garepachi delete garne logic code lekhne 

    res.json({
        messsage: "Book Deleted SuccessFully"
    })
}

exports.editBooks = async function(req,res){
    try {
    // logic code goes here
//      first ma kun book edit garne vanera id capture garne
    const id = req.params.id;
    const {bookName,bookPrice, bookAuthor, bookGenre} = req.body;
    // id capture garepachi edit garne logic code lekhne 
   await books.update({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    },{
        where : {
            id
        }
    })
    res.json({
        messsage: "Book Updated SuccessFully"
    })} catch(error){
        res.json({
            message: "Error aayo"
        })
    }
}

exports.singleFetchBooks = async function(req,res){
    const id = req.params.id
    const datass = await books.findByPk(id)
//    await books.findAll({  OR
//         where : {
//             id
//         }
//     }) // findbypk always returns objects
    res.json ({
        message: "single Book fetched successfully",
        datass
        
    });

};// first capture what id he/she sending..


// module.exports = {fetchBooks,addBooks,deleteBooks,editBooks} 