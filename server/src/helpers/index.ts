import jwt from 'jsonwebtoken';

export const getNewToken = (username: string) => {
    const secretKey = process.env.JWT_SECRET || '';
  return jwt.sign({ username }, secretKey, {
    expiresIn: '18h',
  });
}