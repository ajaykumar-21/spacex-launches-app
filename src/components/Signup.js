import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Signup = () => {
    // Implement similar to Login component
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Signup
            </Button>
        </Form>
    );
};

export default Signup;
