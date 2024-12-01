const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Device = sequelize.define("Device", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  serialNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  batteryLevel: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
  },
  lastSync: {
    type: DataTypes.DATE,
  },
});

module.exports = Device;
