const Programs = require('../../models').Programs;

module.exports = {
    getAllPrograms: (req, res) => {
        return Programs.findAll({ raw: true })
            .then(content => res.send(content))
            .catch(e => res.status(400).send(e));
    },

    getProgramById: (req, res, next) => {
        return Programs.findOne({ where: { id:  res.locals["program_id"] } })
            .then((programCreated) => res.status(200).send(programCreated))
            .catch(e => res.status(400).send(e));
    },

    programCreate:  (req, res) => {
        const { program } = res.locals;
        return Programs.create(program)
            .then((programCreated) => res.status(201).send(programCreated))
            .catch(e => res.status(400).send(e));
    },

    programUpdate: (req, res) => {
        const { program } = res.locals;
        const programId = parseInt(res.locals["program_id"]);
        return Programs.update({ ...program }, { where: { id: programId } })
            .then((programUpdated) => res.status(200).send(programUpdated))
            .catch(e => res.status(400).send(e));
    },

    programDelete: (req, res) => {
        return Programs.destroy({ where: { id: res.locals["program_id"] } })
            .then(() => res.status(200).send("Deleted"))
            .catch(e => res.status(400).send(e));
    },
};
