require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = [
  { id: "m1", name: "iPhone 15 Pro Max", brand: "Apple", price: 1199, original_price: 1299, rating: 4.8, review_count: 12840, image_url: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg", featured: true, is_deal: true, category: "smartphones" },
  { id: "m2", name: "MacBook Pro M3", brand: "Apple", price: 3499, original_price: 3799, rating: 4.7, review_count: 6721, image_url: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg", featured: true, is_deal: true, category: "laptops" },
  { id: "m3", name: "Galaxy S24 Ultra", brand: "Samsung", price: 1299, rating: 4.6, review_count: 5310, image_url: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg", featured: true, category: "smartphones" },
  { id: "m4", name: "Dell XPS 15", brand: "Dell", price: 2199, rating: 4.4, review_count: 2104, image_url: "https://images.pexels.com/photos/18105/pexels-photo.jpg", featured: true, category: "laptops" },
  { id: "m5", name: "Apple Watch Ultra 2", brand: "Apple", price: 799, original_price: 899, rating: 4.5, review_count: 4033, image_url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg", featured: true, is_deal: true, category: "watches" },
  { id: "m6", name: "Garmin Forerunner", brand: "Garmin", price: 499, rating: 4.3, review_count: 1890, image_url: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg", featured: true, category: "watches" },
  { id: "m7", name: "Lenovo Legion 7", brand: "Lenovo", price: 1899, rating: 4.2, review_count: 980, image_url: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg", featured: true, category: "laptops" },
  { id: "m8", name: "OnePlus 12", brand: "OnePlus", price: 799, original_price: 899, rating: 4.4, review_count: 2212, image_url: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg", featured: true, is_deal: true, category: "smartphones" }
];
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Database seeded with products');
    process.exit();
  } catch (err) { console.error(err); process.exit(1); }
};
seedDB();