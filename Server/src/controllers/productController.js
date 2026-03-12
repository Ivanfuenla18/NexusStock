const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const productData = {
      ...req.body,
      user: "65f1a2b3c4d5e6f7a8b9c0d1",
    };

    const product = await Product.create(productData);

    res.status(201).json({
      success: true,
      message: "Producto creado con éxito",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener los productos",
    });
  }
};
