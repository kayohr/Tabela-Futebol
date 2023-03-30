import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { validEmail, validPassword, validLogin } from '../middlewares/validLogin';

const loginRouter = Router();
loginRouter.post('/', validEmail, validPassword, validLogin, loginController.login);

// loginRouter.get('/:id', teamController.teamGetById);

export default loginRouter;
