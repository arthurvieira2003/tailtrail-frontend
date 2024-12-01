const petService = require("../services/pet.service");

const createPetController = async (req, res) => {
  try {
    const pet = await petService.createPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPetByIdController = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePetController = async (req, res) => {
  try {
    const pet = await petService.updatePet(req.params.id, req.body);
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePetController = async (req, res) => {
  try {
    await petService.deletePet(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPetController,
  getPetByIdController,
  updatePetController,
  deletePetController,
};
