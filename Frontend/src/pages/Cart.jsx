import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Function to handle incrementing item quantity and updating the price
  const handleIncrement = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        item.quantity += 1; // Increment quantity
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Function to handle decrementing item quantity and updating the price
  const handleDecrement = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1; // Decrement quantity but not below 1
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Calculate the total price based on quantity and unit price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the Checkout page
  };

  return (
    <>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => handleDecrement(item.id)} 
                    disabled={item.quantity <= 1} // Disable decrement if quantity is 1
                  >
                    -
                  </Button>
                  {item.quantity}
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </Button>
                </td>
                <td>{(item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Show total price */}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

      {/* Checkout Button */}
      <Button variant="primary" onClick={handleCheckout}>Checkout</Button> 

      {/* Go Back Button */}
      <Link to="/">
        <Button variant="secondary">Go Back</Button>
      </Link>
    </>
  );
};

export default Cart;
