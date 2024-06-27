import React, { useState } from 'react';

const AuthModal = ({ isLogin, toggleModal, switchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const url = `http://localhost:5000/api/auth/${isLogin ? 'login' : 'register'}`;
    const body = isLogin ? { email, password } : { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(isLogin ? 'Login successful' : 'Registration successful');
        if (isLogin) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username); // Store the username correctly
        }
        toggleModal();
        window.location.reload(); // Reload the page to reflect the changes
      } else {
        setMessage(data.msg || (isLogin ? 'Login failed' : 'Registration failed'));
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-[#31124b] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl text-[#fa9e1b] mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={e => e.preventDefault()}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[#fa9e1b] text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fa9e1b] leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-[#fa9e1b] text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fa9e1b] leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#fa9e1b] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fa9e1b] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {message && <p className="text-red-500 text-xs italic">{message}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-[#8d4fff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              {isLogin ? 'Sign In' : 'Register'}
            </button>
            {isLogin && (
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            )}
          </div>
        </form>
        <div className="flex flex-col">
          <button className="mt-4 text-red-500" onClick={toggleModal}>
            Close
          </button>
          <button className="mt-2 text-[#8d4fff]" onClick={switchMode}>
            {isLogin ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
