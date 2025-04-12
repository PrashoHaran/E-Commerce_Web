// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example route (you can add your own routes here)
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Sample Product' }]);
});

module.exports = app;
