import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import '../../../App.css';
import { connect} from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../../../components/Alert';

const Register = (props) => {

  const [formInput, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const{
    name, 
    email, 
    password, 
    confirmPassword
  } = formInput;

  const handleChange = e => {
    setForm({ ...formInput ,[e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    if(password !== confirmPassword){
      props.setAlert('Password miss match try again', 'danger');
      console.log('Passwords do not match');
    }else{
      
    }
  }

    return (
        <Fragment>
      <h2 className="large create-account"><i className="fas fa-user-circle"></i> Create Your Account</h2>
      <form className="form" onSubmit={ e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => handleChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" value={password} onChange={e => handleChange(e)} minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={e => handleChange(e)} minLength="6"
          />
          <Alert />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </Fragment>
    )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);