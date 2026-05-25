const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: String,
  price: Number,
  quantity: { type: Number, default: 1 }
});
const orderSchema = new mongoose.Schema({
  customer: { name: String, email: String, address: String },
  items: [orderItemSchema],
  total: Number,
  status: { type: String, default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);