
import React from 'react';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="flex items-center justify-center mb-4">
          <EnergySavingsLeafIcon style={{ color: 'green', fontSize: 40 }} />
          <h1 className="text-2xl font-bold ml-2">Mindful Recovery</h1>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Recover Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
