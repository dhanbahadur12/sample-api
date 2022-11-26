const {
    getAllProduct,
    create,
    update,
    deleteProduct,
    getById,
  } = require("../services/product-service");


  
  module.exports = (app) => {
    app
      .get("/get-all", getAllProduct)
      .post("/", create) 
      .put("/:id", update)
      .delete("/:id", deleteProduct);
  };