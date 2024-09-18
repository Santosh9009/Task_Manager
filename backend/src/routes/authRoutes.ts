import { Router } from 'express';
import { UserLogin, UserSignup } from '../controllers/authController';


const router: Router = Router();

router.post('/signup', UserSignup);
router.post('/login', UserLogin);

export default router;
