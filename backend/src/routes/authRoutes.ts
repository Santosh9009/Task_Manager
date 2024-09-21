import { Router } from 'express';
import { login, signup } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';


const router: Router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, (req, res) => {
  if (req.user) {
    return res.json(req.user);
  } else {
    return res.status(401).json({ message: 'User not found' });
  }
});


export default router;
