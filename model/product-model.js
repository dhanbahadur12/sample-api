const { Sequelize, DataTypes }= require("sequelize");
 const db = require('../db');
 const ProductModel= db.define('product_table',{
   id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(200),
        allowNull: true
    },  
 }, {freezeTableName: false,timestamp:false});
//ProductModel.sync({force:false});
 module.exports=ProductModel;