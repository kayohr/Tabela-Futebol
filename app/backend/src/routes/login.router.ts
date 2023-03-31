import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { validEmail, validLogin, validPassword, validToken } from '../middlewares/validLogin';

const loginRouter = Router();
loginRouter.post('/', validLogin, validEmail, validPassword, loginController.login);
loginRouter.get(
  '/role',
  validToken,
  loginController.loginUser,
);

// loginRouter.get('/:id', teamController.teamGetById);

export default loginRouter;
