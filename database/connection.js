// database  ko code /logic lekhxam
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;
// destructuring ----

//  same thing using express
const {Sequelize,DataTypes} = require("sequelize")


 const sequelize = new Sequelize(process.env.CS)

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