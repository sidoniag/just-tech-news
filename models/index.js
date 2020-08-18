const Post = require('./Post');
const User = require('./User');

// create associations
// user can make many post
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// a post can only belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Post };