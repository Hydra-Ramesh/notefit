import express from 'express';
import { register } from '../controllers/auth.controller.js';

// www.notefit.com/register => Register Button
// create a route raplica using express router who will help us to create a route for the register button
const router = express.Router();

// we create a route for the register button using the post method and we will call the register function from the auth.controller.js file
// we hit for register finally => http://localhost:3000/api/v1/auth/register
router.post('/register',register);

// we will design a login route fot notefit => http://localhost:3000/api/v1/auth/login
// export the router to be used in the app.js file
export default router;