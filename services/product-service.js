const {
  updateBlog,
  deleteProductRepository,
  updateProductRepository,
  fetchAllProduct,
  createProductRepository,
  fetchById,
} = require("../repository/product_repository");
const { responseMessage } = require("../utils/response-message");
const method = require("../utils/method");
const productSchema = require("../validator/product-validator");

async function getAllProduct(req, res, next) {
  try {
    const productData = await fetchAllProduct();
    return responseMessage(res, 200, productData, "prouduct get method", method.GET);
  } catch (error) {
    throw error;
  }
}

async function create(req, res, next) {
  try {
    const { name, description } = req.body;
    await productSchema.create.validateAsync({ name, description });
    await createProductRepository({ name, description });
    return responseMessage(
      res,
      201,
      [],
      "product module data inserted successfully",
      method.POST
    );
  } catch (error) {
    throw error;
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await productSchema.checkParams.validateAsync({ id });
    await productSchema.create.validateAsync({ name,description });
    if (description?.length) {
      await updateProductRepository(name,id);
    } else {
      await updateProductRepository(name,description);
    }
    const data = await fetchById(id);
    return responseMessage(
      res,
      200,
      data || {},
      "product module update sccessfully",
      method.PUT
    );
  } catch (error) {
    throw error;
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productSchema.checkParams.validateAsync({ id });
    deleteProductRepository(id);
    return responseMessage(
      res,
      200,
      [],
      "product deleted by id successfully",
      method.delete
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProduct, create, update, deleteProduct };