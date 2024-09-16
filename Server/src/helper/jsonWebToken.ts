import jwt from 'jsonwebtoken';
import { key } from '../config/conf';

export const generateToken = (payload:string) => {
  return jwt.sign(payload, key, {
    expiresIn: '7d',
  });
};

export const verifyToken = (token:string) => {
  return jwt.verify(token, key);
};