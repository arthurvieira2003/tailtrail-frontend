const User = require("./User");
const Pet = require("./Pet");
const Alert = require("./Alert");
const Device = require("./Device");

// Associações
User.hasMany(Pet);
Pet.belongsTo(User);

Pet.hasMany(Alert);
Alert.belongsTo(Pet);

Pet.hasOne(Device);
Device.belongsTo(Pet);

module.exports = {
  User,
  Pet,
  Alert,
  Device,
};
