import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/style.css'; // Make sure this points to your custom styles

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  // Fetch cart items and calculate total price on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    const total = storedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate a checkout process (here you can connect to an actual API)
    console.log('User Info:', { email, name, paymentMethod, totalPrice });
    // Redirect to a success or confirmation page
    navigate('/confirmation'); // Redirect to a confirmation page (create this page as well)
  };

  return (
    <Container fluid className="checkout-container">
      <Row className="justify-content-center">
        {/* Form Section */}
        <Col md={6} lg={4}>
          <Card className="p-4 shadow-lg">
            <h1 className="text-center mb-4">Checkout</h1>
            <p className="text-center text-muted">Review your order details and complete the payment process.</p>

            <div className="mb-4">
              <p className="h5">Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
            </div>

            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="paymentMethod" className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Confirm Payment
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Product Details Section - Table */}
        <Col md={6} lg={4}>
          <Card className="p-4 shadow-lg">
            <h3 className="text-center mb-4">Your Order</h3>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                      {item.name}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
