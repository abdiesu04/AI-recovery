"use client";

import React, { useState } from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const LoginPage = () => {
  const [formData, setForm] = useState({ username: "", password: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    let headersList = {
      Accept: "application/json",
    };

    let reqOptions = {
      url: "http://localhost:8000/auth/login",
      method: "POST",
      headers: headersList,
      data: formData,
    };

    try {
      let response = await axios.request(reqOptions);
      console.log(response.data);
      localStorage.setItem("token", response.data.access_token); // Save to local storage
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setLoginSuccess(true); // Set login success to true
    } catch (error) {
      console.log(error.response.data);
      setSnackbarMessage("Login failed. Please try again.");
      setSnackbarSeverity("error");
    }

    setSnackbarOpen(true);
  };

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center #10b981 bg-green-60">
      <div className="bg-green-100 p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <h1 className="text-2xl font-bold ml-2" style={{ color: "#67B680" }}>
            Addis Hiwot
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setForm({ ...formData, username: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setForm({ ...formData, password: e.target.value })
              }
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
              <span className="text-green-500 hover:underline">
                Don't have an account? Register
              </span>
            </Link>
          </div>
        </form>
        {loginSuccess && (
          <div className="text-center mt-4">
            <Link href="/home">
              <span className="text-green-500 hover:underline">
              Go to Home
              </span>
            </Link>
          </div>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;