import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const authentication = e => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    password: form.password.value
  };

  axios
    .post('https://api-edteam.alejogs4.now.sh/login', data)
    .then(r => {
      localStorage.setItem('token', r.data.token);
      window.location = '/';
    })
    .catch(alert('Usuario y clave incorrecto'));
};

const Login = () => (
  <div className='ed-grid'>
    <div className='l-block'></div>
    <div className='m-to-center m-60 lg-30'>
      <h2 className='center'>Iniciar sesión</h2>
      <form onSubmit={authentication.bind()} action=''>
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
          <input type='submit' value='Enviar' className='button full' />
        </div>
      </form>
      <div className='center'>
        <p>
          ¿No tiene cuenta de usuario? <Link to='/registro'>Crear cuenta</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
