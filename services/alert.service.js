const Alert = require("../models/Alert");

const createAlert = async (alertData) => {
  return await Alert.create(alertData);
};

const getAlertById = async (id) => {
  return await Alert.findByPk(id);
};

const updateAlert = async (id, alertData) => {
  return await Alert.update(alertData, { where: { id } });
};

const deleteAlert = async (id) => {
  return await Alert.destroy({ where: { id } });
};

module.exports = {
  createAlert,
  getAlertById,
  updateAlert,
  deleteAlert,
};
