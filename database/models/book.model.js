//  books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
        bookName: {
            types: DataTypes.STRING,
            allowNull: false
        },
        bookPrice: {
            types: DataTypes.FLOAT,
            allowNull: false
        },
          bookAuthor: {
            types: DataTypes.STRING,
      
        },
          bookGenre: {
            types: DataTypes.STRING
        },
        bookDescription: {
            types : DataTypes.TEXT
        }
    })
    return Book;
};

module.exports = bookModel; // export default bookModel
