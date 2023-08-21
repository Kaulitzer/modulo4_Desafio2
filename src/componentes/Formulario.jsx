import React, { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');

  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      setMensajeError('El email no es válido.');
      setMensajeExito('');
      return;
    }

    if (contrasena !== confirmContrasena) {
      setMensajeError('Las contraseñas no coinciden.');
      setMensajeExito('');
      return;
    }

    if (edad < 18) {
      setMensajeError('Debes ser mayor de 18 años para registrarte.');
      setMensajeExito('');
      return;
    }


    setMensajeExito('Registro exitoso.');
    setMensajeError('');
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmContrasena">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmContrasena"
            value={confirmContrasena}
            onChange={(e) => setConfirmContrasena(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Género:</label>
          <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {mensajeError && <p className="error">{mensajeError}</p>}
      {mensajeExito && <p className="exito">{mensajeExito}</p>}
    </div>
  );
};

export default Formulario;
