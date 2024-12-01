const Device = require("../models/Device");

const createDevice = async (deviceData) => {
  return await Device.create(deviceData);
};

const getDeviceById = async (id) => {
  return await Device.findByPk(id);
};

const updateDevice = async (id, deviceData) => {
  return await Device.update(deviceData, { where: { id } });
};

const deleteDevice = async (id) => {
  return await Device.destroy({ where: { id } });
};

module.exports = {
  createDevice,
  getDeviceById,
  updateDevice,
  deleteDevice,
};
