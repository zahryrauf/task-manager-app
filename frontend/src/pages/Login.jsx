// frontend/src/pages/Login.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwt_decode(credentialResponse.credential);
      // Optionally send this token or profile to your backend
      const res = await axios.post('http://localhost:5000/auth/google-token', {
        token: credentialResponse.credential,
      });

      console.log('User authenticated:', res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Login to Task Manager</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
    </div>
  );
};

export default Login;
