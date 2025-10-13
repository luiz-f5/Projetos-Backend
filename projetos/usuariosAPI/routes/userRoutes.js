const express = require('express');
const router = express.Router();
const {listUsers, getUserById, createUser} = require('./userController');

router.get('/', listUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

module.exports = router;
