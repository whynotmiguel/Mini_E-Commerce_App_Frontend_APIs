require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const subscriberRoutes = require('./routes/subscriberRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/subscribe', subscriberRoutes);

app.get('/', (req, res) => res.send('E-Commerce API Running'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));