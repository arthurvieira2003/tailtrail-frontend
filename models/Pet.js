const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pet = sequelize.define("Pet", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("dog", "cat"),
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.FLOAT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM("online", "idle", "offline"),
    defaultValue: "offline",
  },
  lastLocation: {
    type: DataTypes.GEOMETRY("POINT"),
  },
  lastUpdate: {
    type: DataTypes.DATE,
  },
});

module.exports = Pet;
