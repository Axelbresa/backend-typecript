import jwt from 'jsonwebtoken';
import { key } from '../config/conf';

export const generateToken = (payload:any) => {
  return jwt.sign(payload, key, {
    expiresIn: '7d',
  });
};

export const verifyToken = (token:any) => {
  return jwt.verify(token, key);
};