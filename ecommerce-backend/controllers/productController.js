const Product = require('../models/Product');
const getProducts = async (req, res) => {
  try {
    const { featured, deal, category, limit } = req.query;
    let filter = {};
    if (featured === 'true') filter.featured = true;
    if (deal === 'true') filter.is_deal = true;
    if (category) filter.category = category;
    let query = Product.find(filter);
    if (limit) query = query.limit(parseInt(limit));
    const products = await query.exec();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getProducts, getProductById };