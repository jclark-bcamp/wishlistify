import { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../middleware/auth.ts';
import { addUser } from '../api/userapi.tsx';
import type { NewUserData } from '../interfaces/NewUserData';

const AddUser = () => {
  const [userData, setUserData] = useState<NewUserData>({
    username: '',
    email: '',
    password: '',
  });

  // Added error state for signing up new user
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // SIMPLE VALIDATION:
    // When user submits, if they haven't completed all fields, set error state and return out of submit event handler
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      setError('Please complete all fields!');
      return;
    } else {
      setError('');
    }

    try {
      const data = await addUser(userData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='form-container'>
      {error && (
        <div className='card text-danger p-3'>
          {error}
        </div>
      )}
      <form className='form add-user-form' onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <div className='form-group'>
          <label>Username</label>
          <input
            placeholder='Username'
            className='form-input'
            type='text'
            name='username'
            value={userData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            placeholder='Email'
            className='form-input'
            type='text'
            name='email'
            value={userData.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            placeholder='Password'
            className='form-input'
            type='password'
            name='password'
            value={userData.password || ''}
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

export default AddUser;
