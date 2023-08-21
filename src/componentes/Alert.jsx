import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  return (
    <div style={{ color: tipo === 'success' ? 'green' : 'red' }}>
      {mensaje}
    </div>
  );
};

export default Alert;
