// database  ko code /logic lekhxam
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;
// destructuring ----

//  same thing using express
const {Sequelize,DataTypes} = require("sequelize")

 const sequelize = new Sequelize("postgresql://postgres.  coychfigfotbkjqbrqxy:meropailodatabase@aws-1-ap-south-1.pooler.supabase.com:6543/postgres") //class ko object create gareko--- database connection string ho yo-- database url ho yo-- database ko username, password, host, port, database name sabai xa yo url ma and new Sequelize() le chai database sanga connect garna help garcha and sequelize chai hamro object jun Sequelize class lai new keyword le instantiate gareko xa

 sequelize.authenticate() // authenticate() method le chai database sanga connection authenticate garna help garcha-- database sanga connect vayo ki vayena vanera check garna help garcha
 .then (()=>{
    console.log(" authenticated vayo !!")
 })
 .catch((err)=>{
    console.log("Error aayo" + err)
 })

const db = {} // empty object create gareko xa db vanne variable ma
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes) // book.model.js file ma export gareko function lai call gareko xa and tyo function ma sequelize ra DataTypes pass gareko xa-- tyo function le chai book model create garna help garcha and tyo model lai db.books ma store gareko xa


// Migrate ko laagi hamile code lekhxam 
sequelize.sync({alter : false}).then(()=>{ 
   console.log("Migrate vayo hai") 
});

module.exports = db;
