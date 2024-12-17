import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Layout = () => {
    
  return (
    <>
    
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Nav.Link href="checkout">checkout</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
           
           
          </Nav>
        </Container>
          <FaShoppingCart style={{ marginRight: '100px' }} />
      </Navbar>
    <Outlet/>
    </>
   
  );
};

export default Layout;
 