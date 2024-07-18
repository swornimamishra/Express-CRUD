import express from 'express';
import Controller from './controller.js';

const router = express.Router();

router.get('/', Controller.index);
router.get('/users/all', Controller.getAllUsers);
router.get('/users/:id', Controller.getUserById);
router.post('/users', Controller.createUser);
router.put('/users/:id',Controller.editUserById);
router.delete('/users/:id',Controller.deleteUserById);

export default router;


//Go to http://localhost:8000/ to see the welcome message.
//Go to http://localhost:8000/api/ to see the Express CRUD message.
//Go to http://localhost:8000/api/users/all to see all users.
//Go to http://localhost:8000/api/users/1 (or any valid user ID) to see the user details.