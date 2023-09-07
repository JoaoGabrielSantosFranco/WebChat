import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Lógica de login bem-sucedida

    navigate('/chat');
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" placeholder="Username" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
