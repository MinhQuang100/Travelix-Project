import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ closeProfile }) => {
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [isUsernameForm, setIsUsernameForm] = useState(true);
  const [message, setMessage] = useState('');

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
        setFormData((prevData) => ({
          ...prevData,
          username: res.data.username,
        }));
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
      if (isUsernameForm) {
        await axios.put('/api/user/profile', { username: formData.username }, config);
        alert('Username updated successfully');
      } else {
        const { currentPassword, newPassword, confirmNewPassword } = formData;
        if (newPassword !== confirmNewPassword) {
          alert("New passwords do not match");
          return;
        }

        await axios.put('/api/user/profile', { currentPassword, newPassword }, config);
        alert('Password updated successfully');
      }
      closeProfile();
    } catch (err) {
      console.error(err.response.data);
      alert('Error updating profile');
    }
  };

  const switchForm = () => {
    setIsUsernameForm(!isUsernameForm);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-[#77aaff] p-8 rounded shadow-md w-full max-w-md">
        <button onClick={closeProfile} className="text-gray-600 hover:text-gray-900 absolute top-4 right-4">&times;</button>
        <h2 className="text-2xl font-bold text-white mb-6">
          {isUsernameForm ? 'Update Username' : 'Change Password'}
        </h2>
        <form onSubmit={onSubmit}>
          {isUsernameForm ? (
            <div className="mb-4">
              <label className="block text-white mb-2">Username</label>
              <input
                type="text" name="username" value={formData.username}
                onChange={onChange} className="w-full px-3 py-2 border rounded" required/>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-white mb-2">Current Password</label>
                <input
                  type="password" name="currentPassword" value={formData.currentPassword}
                  onChange={onChange} className="w-full px-3 py-2 border rounded" required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">New Password</label>
                <input
                  type="password" name="newPassword" value={formData.newPassword}
                  onChange={onChange} className="w-full px-3 py-2 border rounded" required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Confirm New Password</label>
                <input
                  type="password" name="confirmNewPassword" value={formData.confirmNewPassword}
                  onChange={onChange} className="w-full px-3 py-2 border rounded" required
                />
              </div>
            </>
          )}
          <button type="submit" className="w-full text-white bg-[#5599ff] py-2 px-4 rounded hover:bg-blue-600">
            {isUsernameForm ? 'Update Username' : 'Change Password'}
          </button>
        </form>
        <div className="flex flex-col mt-4">
          <button className="mt-2 text-[#8d4fff]" onClick={switchForm}>
            {isUsernameForm ? 'Switch to Change Password' : 'Switch to Update Username'}
          </button>
          <button className="mt-4 text-red-500" onClick={closeProfile}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
