const CartItem = require('../models/cartItem');
const Product = require('../models/product');

// Add item to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cartItem = await CartItem.findOne({ productId });

    if (cartItem) {
      // If the item already exists in the cart, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // If the item doesn't exist, add it to the cart
      cartItem = new CartItem({ productId, quantity });
      await cartItem.save();
    }

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart', error: err });
  }
};

// Get all cart items
exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart items', error: err });
  }
};
