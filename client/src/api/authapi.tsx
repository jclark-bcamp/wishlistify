import type { UserLogin } from '../interfaces/UserLogin';

const login = async (userInfo: UserLogin) => {
  try {
    // THE FECTH RETURNED '401' ERROR FAILED TO LOAD RESOURCE: THE SERVER RESPONDED WITH A STATUS OF 401 (UNAUTHORIZED)
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    // THIS CONSOLE.LOG IS BEING TRIGGERED
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };
