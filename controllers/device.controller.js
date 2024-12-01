const deviceService = require("../services/device.service");

const createDeviceController = async (req, res) => {
  try {
    const device = await deviceService.createDevice(req.body);
    res.status(201).json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeviceByIdController = async (req, res) => {
  try {
    const device = await deviceService.getDeviceById(req.params.id);
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDeviceController = async (req, res) => {
  try {
    const device = await deviceService.updateDevice(req.params.id, req.body);
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDeviceController = async (req, res) => {
  try {
    await deviceService.deleteDevice(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDeviceController,
  getDeviceByIdController,
  updateDeviceController,
  deleteDeviceController,
};
