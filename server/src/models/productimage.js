'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define('ProductImage', {
    productId: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {});
  ProductImage.associate = function(models) {
    // associations can be defined here
  };
  return ProductImage;
};