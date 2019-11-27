const Users = require('../../models').Users;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    getAllUsers: (req, res) => {
        return Users.findAll({ raw: true })
            .then(content => res.send(content))
            .catch(e => res.status(400).send(e));
    },

    getUserById: (req, res, next) => {
        return Users.findOne({ where: { id: res.locals["user_id"] } })
            .then((userCreated) => res.status(200).send(userCreated))
            .catch(e => res.status(400).send(e));
    },

    userCreate: (req, res) => {
        const { user } = res.locals;
        if (user.role === "admin") user.password = "admin";
        if (user.role === "teacher") user.password = "teacher";
        return user.password = bcrypt.hash(user.password, saltRounds)
            .then(() => Users.create(user))
            .then((userCreated) => res.status(201).send(userCreated))
            .catch(e => res.status(400).send(e));
    },

    userUpdate: (req, res) => {
        const { user } = res.locals;
        const userId = parseInt(res.locals["user_id"]);
        return Users.update({ ...user }, { where: { id: userId } })
            .then((userUpdated) => res.status(200).send(userUpdated))
            .catch(e => res.status(400).send(e));
    },

    userDelete: (req, res) => {
        return Users.destroy({ where: { id: res.locals["user_id"] } })
            .then(() => res.status(200).send("Deleted"))
            .catch(e => res.status(400).send(e));
    },
};
