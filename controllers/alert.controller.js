const alertService = require("../services/alert.service");

const createAlertController = async (req, res) => {
  try {
    const alert = await alertService.createAlert(req.body);
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlertByIdController = async (req, res) => {
  try {
    const alert = await alertService.getAlertById(req.params.id);
    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAlertController = async (req, res) => {
  try {
    const alert = await alertService.updateAlert(req.params.id, req.body);
    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAlertController = async (req, res) => {
  try {
    await alertService.deleteAlert(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAlertController,
  getAlertByIdController,
  updateAlertController,
  deleteAlertController,
};
