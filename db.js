const Sequelize  =require('sequelize');
 const db = new Sequelize({
     database: 'click2career',
      username:'postgres',
     password:'dhan',
     dialect:'postgres',
     port: 5432,
     host: 'localhost',
     logging: false,
 });
 module.exports = db;
