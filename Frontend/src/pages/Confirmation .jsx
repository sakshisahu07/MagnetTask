import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed. You will receive a confirmation email shortly.</p>
      <Link to="/">
        <Button variant="secondary">Go Back to Store</Button>
      </Link>
    </>
  );
};

export default Confirmation;
