import React, { useState } from 'react';
import './AdminLogin.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

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
      const response = await axios.post('http://localhost:4000/api/admin/login', credentials);
      if (response.data.success) {
        toast.success('Login successful');
        // Redirect to admin dashboard or perform other actions
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
      <form onSubmit={onSubmitHandler}>
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
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
          <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
        </div>
      </form>
    </div>
    </section>
  );
};

export default AdminLogin;
