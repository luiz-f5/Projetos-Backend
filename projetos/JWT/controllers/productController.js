const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name } = req.body;
  const product = await Product.create({ name });
  res.status(201).json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.destroy({ where: { id } });
  if (deleted) {
    res.json({ message: 'Produto removido' });
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};
