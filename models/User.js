/* eslint-disable linebreak-style */
// Create Schema
class User {
  constructor(
    name = 'unkown name',
    email = 'unspecified email',
    password = 'unknown password',
    avatar = 'unspecified avatar',
    date = Date.now,
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.date = date;
  }
}

module.exports = User;
