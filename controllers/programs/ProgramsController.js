const { Programs } = require('../../models');

function containObject(array) {
  return array.some((val) => val instanceof Object);
}

function createObject(program) {
  return Programs.create(program).then((contentCreated) => contentCreated.get('id'));
}

async function recursiveProgramCreate(list) {
  const copy = { ...list };
  if (containObject(list.content)) {
    await Promise.all(list.content.map(async (node) => {
      const id = await recursiveProgramCreate(node);
      copy.content.push(id);
    }));
  }
  const cleanList = { ...copy, content: copy.content.filter((node) => typeof node === 'number') };
  const id = await createObject(cleanList);
  return id;
}

module.exports = {

  getAllPrograms: (req, res) => Programs.findAll({ raw: false })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send({ error: e.message })),

  getProgramById: (req, res) => Programs.findOne({ where: { id: res.locals.program_id } })
    .then((programCreated) => res.status(200).send(programCreated))
    .catch((e) => res.status(400).send({ error: e.message })),

  programCreate: (req, res) => recursiveProgramCreate(res.locals.programs)
    .then(() => res.status(201).send({ message: 'Created' }))
    .catch((e) => res.status(400).send({ error: e.message })),

  programUpdate: (req, res) => {
    const { programs } = res.locals;
    const programId = parseInt(res.locals.program_id, 10);

    return Programs.update({ title: programs.title }, { where: { id: programId } })
      .then((programUpdated) => res.status(200).send(programUpdated))
      .catch((e) => res.status(400).send({ error: e.message }));
  },

  programDelete: (req, res) => Programs.destroy({ where: { id: res.locals.program_id } })
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send({ error: e.message })),
};
