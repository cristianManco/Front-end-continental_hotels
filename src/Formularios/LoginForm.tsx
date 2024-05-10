import React, { FormEvent } from 'react';
import '../Styles/App.css'


const LoginForm: React.FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='div-login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login'>
        <label>Email</label>
        <input type="email" name="email" />

        <label>Password</label>
        <input type="password" name="password" />

         <br />
        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="image-container">
        <img src="../public/vite.svg" alt="Imagen de perfil" />
      </div>
    </div>
  );
};

export default LoginForm;
