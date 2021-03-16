const User = require('./User');
const Dates = require('./Dates');

User.hasMany(Dates, {
    foreignKey: 'user_id'
});

Dates.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Dates };