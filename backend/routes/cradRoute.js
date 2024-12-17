const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to get all cart items
router.get('/', cartController.getCartItems);

// Route to add an item to the cart
router.post('/add', cartController.addToCart);

module.exports = router;
