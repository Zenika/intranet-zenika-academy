const bcrypt = require('bcryptjs');
const { Users } = require('../../models');

const saltRounds = 10;

module.exports = {
  getAllUsers: (req, res) => Users.findAll({ raw: true })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send(e)),

  getUserById: (req, res) => Users.findOne({ where: { id: res.locals.user_id } })
    .then((userCreated) => res.status(200).send(userCreated))
    .catch((e) => res.status(400).send(e)),

  userCreate: async (req, res) => {
    const { user } = res.locals;
    switch (user.role) {
      case 'admin':
        user.password = 'admin';
        user.role = 2;
        break;
      case 'student':
        user.password = 'student';
        user.role = 1;
        break;
      default:
        break;
    }
    try {
      user.password = await bcrypt.hash(user.password, saltRounds);
      const userCreated = await Users.create(user);
      res.status(201).send(userCreated);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  userUpdate: (req, res) => {
    const { user } = res.locals;
    const userId = parseInt(res.locals.user_id);
    return Users.update({ ...user }, { where: { id: userId } })
      .then((userUpdated) => res.status(200).send(userUpdated))
      .catch((e) => res.status(400).send(e));
  },

  userSignIn: async (req, res) => {
    const { user } = res.locals;
    const foundUser = await Users.findOne({ where: { email: user.email } });
    if (!foundUser) res.status(403).json({ message: 'User not found' });
    try {
      const allowedUser = await bcrypt.compare(user.password, foundUser.password);
      if (!allowedUser) throw new Error('wrong credentials');
      res.status(200).json({ role: foundUser.role, email: foundUser.email });
    } catch (error) {
      res.status(403).json(error.message);
    }
  },

  userDelete: (req, res) => Users.destroy({ where: { id: res.locals.user_id } })
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send(e)),
};
