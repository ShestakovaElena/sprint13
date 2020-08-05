const usersRouter = require('express').Router();
const { getUsers, createUser, getUserById } = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:userId', getUserById);

module.exports = usersRouter;
