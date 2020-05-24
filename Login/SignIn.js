import React from 'react';
import './SignIn.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  }

  return (
    <>
      <h2>Log In</h2>
      <small>Log in to continue in our website</small>
      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="email" placeholder="Email Address" ref={register({ required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
          {errors.email && <small className="text-danger form-text">Please enter a valid  Email-ID</small>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" ref={register({ required: true })} />
          {errors.email && <small className="text-danger form-text">Please enter password</small>}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="agree" label="Keep me logged in" className="remeber" ref={register} />
        </Form.Group>
        <Button variant="danger" className="btn-block d-block" type="submit">
          Sign In
  </Button>
      </Form>

      <div className="row  mt-5 mb-3 ">
            <div className="col-5">
            <ul className="social-link">
        <li><Link className='facebook' to='//www.facebook.com/tolmatol/' target="_blank"><i className="fa fa-facebook"></i></Link></li>
        <li><Link className='twitter' to='//twitter.com/tolmatol' target="_blank"><i className="fa fa-twitter"></i></Link></li>
         
      </ul>
            </div>
            <div className="col-7 text-right">
        <span className="text-muted"><small>Don't have an account?</small></span><Link to='/register/' className="active">Register</Link>
            </div>
        </div>
    </>
  )
}

export default SignIn