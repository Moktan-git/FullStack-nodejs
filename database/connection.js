

// database  ko code /logic lekhxam

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;
// destructuring ----

const {Sequelize,DataTypes} = require("sequelize")
 const sequelize = new Sequelize("postgresql://postgres.coychfigfotbkjqbrqxy:meropailodatabase@aws-1-ap-south-1.pooler.supabase.com:6543/postgres")

 sequelize.authenticate()
 .then (()=>{
    console.log(" authenticated vayo !!")
 })
 .catch((err)=>{
    console.log("Error aayo", err)
 })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db