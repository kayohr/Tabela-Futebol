// import { Request } from "express";

import * as jwt from 'jsonwebtoken';

const jwtToken = (id:number, role:string) => {
  const secret = process.env.JWT_SECRET || 'xablau';

  const jwtConfig: jwt.SignOptions = {
    expiresIn: '10h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload: { id, role } }, secret, jwtConfig);
  return token;
};

export default jwtToken;
