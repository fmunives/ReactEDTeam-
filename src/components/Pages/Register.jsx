import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const message = '';

const registration = e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value
  };

  Axios.post(`https://api-edteam.alejogs4.now.sh/signup`, data)
    .then(() => alert('Usuario creado'))
    .catch(() => alert('Error en creación'));
};

const finalMessage = message;

const Register = () => (
  <div className='ed-grid'>
    <div className='l-block'></div>
    <div className='m-to-center m-60 lg-30'>
      <h2 className='center'>Registro de cuenta</h2>
      <form onSubmit={registration.bind()} action=''>
        <div className='form__item'>
          <label htmlFor='email'>
            Nombre de usuario:
            <input
              type='text'
              id='name'
              placeholder='Freddy Munive'
              name='name'
              required
            />
          </label>
        </div>
        <div className='form__item'>
          <label htmlFor='email'>
            Correo electrónico:
            <input
              type='email'
              id='email'
              placeholder='fmunives@gmail.com'
              name='email'
              required
            />
          </label>
        </div>
        <div className='form__item'>
          <label htmlFor='password'>
            Contraseña:
            <input
              type='password'
              id='password'
              placeholder='.............'
              name='password'
              required
            />
          </label>
        </div>
        <div className='form-item'>
          <input type='submit' value='Registrar' className='button full' />
        </div>
        <div className='form-item'>{finalMessage}</div>
      </form>
      <div className='center'>
        <p>
          ¿Ya tienes cuenta de usuario? <Link to='/login'>Iniciar sesión</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Register;
