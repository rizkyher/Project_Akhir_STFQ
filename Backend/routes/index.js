import express from 'express';
import { getUsers, Login, Logout, Register } from '../controlers/Users.js';

const router = express.Router();


router.get('/users', getUsers)
router.post('/register', Register)
router.post('/login', Login)
router.post('/logout', Logout)


export default router