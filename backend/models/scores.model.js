'use strict';
module.exports = (sequelize, DataTypes) => {
    const Allgames = sequelize.define('Allgames', {

    teamA: DataTypes.STRING,
    teamB: DataTypes.STRING,
    ScoreA: DataTypes.INTEGER,
    ScoreB: DataTypes.INTEGER,
    Time: DataTypes.DATE,
    Category: DataTypes.STRING
  }, {});
  Allgames.associate = function(models) {
    // associations can be defined here
  };
  return Allgames;
};
