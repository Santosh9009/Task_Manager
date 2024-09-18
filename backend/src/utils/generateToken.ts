import jwt from 'jsonwebtoken';

const generateToken = (id: any): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d', 
  });
};

export default generateToken;
