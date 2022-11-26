const express =require("express");
const { Sequelize, where }= require("sequelize");
 const db = require('./db');
 const productController=require('./controller/product-controller')
 const registerModel= require('./model/index-model');



(async()=>{
   try{
   await db.authenticate();
   
   //   await db.sync({alter: true})
      console.log("connection successfully");
   }
   catch(error){
      console.log(error);
   }
})();

registerModel(db);

const app =express();
app.use(express.json());
 const PORT =8000;
 productController(app);

 app.listen(PORT,()=>{
   console.log("server listening at port",PORT);
 });
