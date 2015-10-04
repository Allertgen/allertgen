var db = require('./database');
var Sequelize = require('sequelize');

module.exports = function(){
  //create user table
  var User = db.define('Users', {
      userId: {type: Sequelize.STRING,
      unique: true, 
      notEmpty: true, 
      notNull: true,
      primaryKey: true
    }, 
    gluten: Sequelize.BOOLEAN,
    soy: Sequelize.BOOLEAN,
    dairy: Sequelize.BOOLEAN
  });

  var Restaurant = db.define('Restaurant', {
    title: {
      type: Sequelize.STRING,
      notEmpty: true,
      notNull: true
    },
    description: {
      type: Sequelize.STRING,
      notEmpty: true,
      notNull: true
    },
    location: {
      type: Sequelize.STRING
    },
    keywords: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    }
    //sequelize automatically makes createdAt and updatedAt columns
  });

  // We don't need create a join table when we're using an ORM 
  // Use a method to set relationships
  Restaurant.belongsToMany(User, {through: 'UserRestaurant'});
  User.belongsToMany(Restaurant, {through: 'UserRestaurant'});

  Restaurant.belongsTo(User, {as:'ownerId'});

  db.sync();
  return {User:User, Restaurant: Restaurant};
};