import { NextFunction, Request, Response } from 'express';

const validLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

// const validUsername = (req: Request, res: Response, next: NextFunction) => {
//   const { username } = req.body;
//   if (!username) {
//     return res.status(400).json({ message: '"username" is required' });
//   }

//   next();
// };
const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  //   console.log(email);
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (!emailRegex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};
const validPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

// const loginValid = (req: Request, res: Response, next: NextFunction) => [
//   validEmail(req, res, next),
//   validPassword(req, res, next),
//   validLogin(req, res, next),
// ];
export { validEmail, validPassword, validLogin };

// const validLogin = (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({
//             message: 'Some required fields are missing',
//           });
//     }

//     next();
// };
