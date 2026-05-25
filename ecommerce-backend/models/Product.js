const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  original_price: { type: Number },
  rating: { type: Number, default: 4.0 },
  review_count: { type: Number, default: 0 },
  image_url: { type: String, required: true },
  featured: { type: Boolean, default: false },
  is_deal: { type: Boolean, default: false },
  category: { type: String, enum: ['smartphones', 'laptops', 'watches'], required: true },
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);