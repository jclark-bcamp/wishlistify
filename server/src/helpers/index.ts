import jwt from 'jsonwebtoken';

export const getNewToken = (email: string, userId: number) => {
  const secretKey = process.env.JWT_SECRET_KEY || '';
  console.log ('secretekey', secretKey)
  return jwt.sign({ email, userId }, secretKey, {
    expiresIn: '18h',
  });
}