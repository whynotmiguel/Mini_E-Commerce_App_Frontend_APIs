const Order = require('../models/Order');
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getOrders = async (req, res) => {
  const orders = await Order.find().sort('-createdAt');
  res.json(orders);
};
module.exports = { createOrder, getOrders };