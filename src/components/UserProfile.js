// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ closeProfile }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      try {
        const res = await axios.get('/api/user/profile', config);
        setFormData({
          username: res.data.username,
          email: res.data.email,
        });
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchUserData();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
      },
    };

    try {
      await axios.put('/api/user/profile', formData, config);
      alert('Profile updated successfully');
      closeProfile();
    } catch (err) {
      console.error(err.response.data);
      alert('Error updating profile');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-[#31124b]  p-8 rounded shadow-md w-full max-w-md">
        <button
          onClick={closeProfile}
          className="text-gray-600 hover:text-gray-900 absolute top-4 right-4"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#fa9e1b] mb-6">User Profile</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-[#fa9e1b] mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#fa9e1b] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#8d4fff] py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
