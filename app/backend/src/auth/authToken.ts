import * as jwt from 'jsonwebtoken';

const portToken = process.env.JWT_SECRET || 'secret';

interface JWTPayload {
//   id: number;
  username?: string;
  id?: number;
  role?: string;
  password?: string;
  email?:string;
  // Users | null

}

export default function createToken(payload: JWTPayload) {
  const config: jwt.SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ payload }, portToken, config);
  return token;
}
