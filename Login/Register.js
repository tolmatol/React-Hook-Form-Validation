import React from 'react';
import './SignIn.css';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <h2>Register</h2>
            <small>Create an account free and enjoy it</small>
            <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="fname">
                    <Form.Control type="text" name="fname" placeholder="First Name" ref={register({ required: true })} />
                    {errors.fname && <small className="text-danger form-text">Please enter first name</small>}
                </Form.Group>

                <Form.Group controlId="lname">
                    <Form.Control type="text" name="lname" placeholder="Last Name" ref={register({ required: false })} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" name="email" placeholder="Email Address" ref={register({ required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
                    {errors.email && <small className="text-danger form-text">Please enter a valid  Email-ID</small>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                    {errors.password && <small className="text-danger form-text">Please enter password</small>}
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="acceptTandC" label="I agree to the terms of service" className="remeber" ref={register({ required: true })} />
                    {errors.acceptTandC && <small className="text-danger form-text">Please accept T&C</small>}
                </Form.Group>
                <Button variant="danger" className="btn-block d-block" type="submit">
                    Register
  </Button>
            </Form>
        </>
    )
}

export default Register