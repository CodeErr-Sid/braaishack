import React, { useState } from 'react';
import './AdminLogin.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', credentials, {
        withCredentials: true // Ensure cookies are sent and received
      });
      if (response.data.success) {
        toast.success('Login successful');
        // Pass the token from the response to the login function
        login(response.data.token);
        navigate('/'); // Redirect to home page
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <section className='admin-login'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <form className='admin-login-form' onSubmit={onSubmitHandler}>
          <h3>Login Here</h3>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChangeHandler}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChangeHandler}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
