const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/api/pets', petController.getAllPets);

router.post(
  '/api/pets',
  [
    body('name').isString().notEmpty(),
    body('type').isString().notEmpty(),
    body('age').isInt(),
    body('adopted').optional().isBoolean()
  ],
  petController.createPet
);

router.delete('/api/pets/:id', petController.deletePet);

module.exports = router;
