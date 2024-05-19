import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../Styles/App.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('authToken', token);
        console.log('Registro exitoso');
      } else {
        const errorData = await response.json();
        console.error('Error en el registro', errorData);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className='containers'>
      <h1>Register</h1>
      <div className="register-form">
        <form onSubmit={handleSubmit} className='register'>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

          <button type="submit">Sign up</button>
        </form>
        <div className="image-container">
          <img className='imgs' src="../../public/2ac5001792794643bb384ab3944ace81.jpg" alt="Imagen de perfil" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
