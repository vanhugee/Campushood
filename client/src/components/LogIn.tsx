// LoginForm.js
import React, { useState } from 'react';

export function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // Perform authentication logic here
    setIsLoggedIn(true);
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
