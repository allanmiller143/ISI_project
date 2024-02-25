// src/components/Button.js
import React from 'react';

function Button({ label, onClick }) {
  return (
    <div className='my-button-align'>
      <button onClick={onClick}className = 'my-button'>
        {label}
      </button>
    </div>
  );
}

export default Button;
