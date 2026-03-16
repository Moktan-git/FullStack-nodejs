// database  ko code /logic lekhxam
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;
// destructuring ----

//  same thing using express
const {Sequelize,DataTypes} = require("sequelize")


 const sequelize = new Sequelize("postgresql://postgres.coychfigfotbkjqbrqxy:meropailodatabase@aws-1-ap-south-1.pooler.supabase.com:6543/postgres")

 sequelize.authenticate()
 .then (()=>{
    console.log(" authenticated vayo !!")
 })
 .catch((err)=>{
    console.log("Error aayo" + err)
 })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes)


// Migrate ko laagi hamile code lekhxam
sequelize.sync({alter : false}).then(()=>{
   console.log("Migrate vayo hai")
});

module.exports = db;