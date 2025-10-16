const Pet = require('../models/pet');

exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pets.' });
  }
};

exports.createPet = async (req, res) => {
  try {
    const { name, type, age, adopted } = req.body;
    const newPet = await Pet.create({ name, type, age, adopted });
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet.' });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pet.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Pet removido com sucesso.' });
    } else {
      res.status(404).json({ error: 'Pet não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover pet.' });
  }
};
