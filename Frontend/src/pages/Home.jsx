import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "../images/cloth.jpg"; // Example image
import '../css/style.css'; // Import the custom CSS for styles

const Home = () => {
  const [cartCount, setCartCount] = useState(0); // Cart count state
  const [cartItems, setCartItems] = useState([]); // Cart items state

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === item.id);
    
    if (itemIndex !== -1) {
      // If the item is already in the cart, increment the quantity
      updatedCartItems[itemIndex].quantity += 1;
    } else {
      // Add new item to cart
      updatedCartItems.push({ ...item, quantity: 1 });
    }
    
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.length); // Update cart count
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Store in localStorage
  };

  return (
    <>
      <h1>Welcome to the Store</h1>
      <div className="card-container">
        {[...Array(5)].map((_, index) => (
          <Card key={index} className="product-card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Product {index + 1}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart({ id: index + 1, name: `Product ${index + 1}`, image: img })}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Show Cart Count and Link to Cart Page */}
      <div>
        <h3>Cart Items: {cartCount}</h3>
        <Link to="/cart">
          <Button variant="success">Go to Cart</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
