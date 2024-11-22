import jwt from 'jsonwebtoken';
export const getNewToken = (username) => {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    return jwt.sign({ username }, secretKey, { expiresIn: '1h' });
};