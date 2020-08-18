const User = require('./User');
const Post = require('./Post');

// create associations
// user can make many post
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// a post can only belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };