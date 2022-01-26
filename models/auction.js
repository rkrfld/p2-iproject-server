'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auction.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    year: DataTypes.INTEGER,
    basePrice: DataTypes.INTEGER,
    currentBid: DataTypes.INTEGER,
    CurrentBidUserId: DataTypes.INTEGER,
    buyNow: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Auction',
  });
  return Auction;
};