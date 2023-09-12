const User = require('./User');
const TechItems = require('./TechItems');

User.hasMany(TechItems, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechItems.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, TechItems };
