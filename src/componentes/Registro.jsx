import React from 'react';
import './Registro.css'; 
import SocialButton from './SocialButton';
import Formulario from './Formulario';

const Registro = () => {
  return (
    <div className="registro-container">
      <div className="registro-card">
        <h1>Crea una cuenta</h1>
        <div className="social-icons">
          <SocialButton icon="facebook" />
          <SocialButton icon="github" />
          <SocialButton icon="linkedin" />
        </div>
        <p>o usa tu email para registrarte</p>
        <Formulario />
      </div>
    </div>
  );
};

export default Registro;
