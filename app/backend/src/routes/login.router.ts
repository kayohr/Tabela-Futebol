import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { validEmail, validLogin, validPassword } from '../middlewares/validLogin';

const loginRouter = Router();
loginRouter.post('/', validLogin, validEmail, validPassword, loginController.login);

// loginRouter.get('/:id', teamController.teamGetById);

export default loginRouter;
