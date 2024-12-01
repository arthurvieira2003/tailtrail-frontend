const Pet = require("../models/Pet");

const createPet = async (petData) => {
  return await Pet.create(petData);
};

const getPetById = async (id) => {
  return await Pet.findByPk(id);
};

const updatePet = async (id, petData) => {
  return await Pet.update(petData, { where: { id } });
};

const deletePet = async (id) => {
  return await Pet.destroy({ where: { id } });
};

module.exports = { createPet, getPetById, updatePet, deletePet };
