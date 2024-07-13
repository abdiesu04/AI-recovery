'use client'

import React from 'react';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can add logic to connect to your FastAPI backend
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) });
    // Replace '/api/login' with your actual API endpoint for login
  };

  return (
    <div className="min-h-screen flex items-center justify-center #10b981 bg-green-60">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="flex items-center justify-center mb-4">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} className="h-12 w-12" />
          <h1 className="text-2xl font-bold ml-2" style={{ color: '#67B680' }}>Addis Hiwot</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <Link href="/register">
              <span className="text-green-500 hover:underline">Don't have an account? Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
