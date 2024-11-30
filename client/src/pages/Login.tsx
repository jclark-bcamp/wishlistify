import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../middleware/auth.ts';
import { login } from '../api/authapi.tsx';
import type { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    email: '',
    userPassword: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      if (data && data.token) {
        console.log("LOGIN.TSX -> DATA FROM LOGIN:", data);
        Auth.login(data.token);
        console.log
      } else {
        throw new Error('Invalid login response');
      }
    } catch (err) {
      // console.log being triggered
      console.log('Failed to login', err);
    }
  };

  return (
    <div className='form-container'>
      <form className='' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-group'>
          <label>Email</label>
          <input
            placeholder='Email'
            className='form-input'
            type='text'
            name='email'
            value={loginData.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            placeholder='Password'
            className='form-input'
            type='password'
            name='userPassword'
            value={loginData.userPassword || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
