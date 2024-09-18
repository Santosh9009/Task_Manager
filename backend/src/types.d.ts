import {Document} from 'mongoose';
declare global {
  namespace Express {
    interface Request {
      user?: Usertype; 
    }
  }
}

export interface Usertype extends Document {
  _id:string,
  username: string;
  email: string;
  password: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
}