import React from 'react';
import '../styles.css';

function ViewCardProfilePage({ label, value }) {
  return (
    <div className='card-container'>
      <div className='label-container'>
        <p className='label-text'>{label}</p>
      </div>
      <div className='value-container'>
        <p className='value-text'>{value}</p>
      </div>
    </div>
  );
}

export default ViewCardProfilePage;
