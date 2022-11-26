const ProductModel = require("../model/product-model");
const db = require("../db");

const fetchAllProduct = async () => await ProductModel.findAll();


const updateProductRepository = async (name, id, description) => {
 description?.length
    ? await ProductModel.update({ name}, { where: { id } })
    : await ProductModel.update({name,description}, {where: {id}});
};


const deleteProductRepository = async (id) => {
  await ProductModel.destroy({ where: { id } });
  return true;
};

const createProductRepository = async(data) => {
  try {
    await ProductModel.create(data);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
   
  updateProductRepository,
  deleteProductRepository,
  fetchAllProduct,
  createProductRepository,
};