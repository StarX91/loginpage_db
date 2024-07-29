import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmPasswordReset } from "firebase/auth";
import { auth } from './firebaseConfig'; // Adjust the import path

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const oobCode = queryParams.get('oobCode');
    if (!oobCode) {
      setMessage('Invalid or missing code.');
    }
  }, [location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    const queryParams = new URLSearchParams(location.search);
    const oobCode = queryParams.get('oobCode');
    if (!oobCode) {
      setMessage('Invalid or missing code.');
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, password);
      setMessage('Password has been reset. You can now log in with your new password.');
      navigate('/login');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
