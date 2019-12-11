const { Programs } = require('../../models');

function containObject(array) {
  return array.some((val) => val instanceof Object);
}

function containIds(array) {
  return array.some((val) => typeof val === 'number');
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

async function createProgramObject(program) {
  const list = { ...program };
  if (containIds(program.content)) {
    await Promise.all(program.content.map(async (node) => {
      if (typeof node === 'number' && node > 0) {
        const newItemArray = await Programs.findAll({ where: { id: node }, raw: true });
        newItemArray[0].content = newItemArray[0].content.split(';');
        const cleanItem = {
          ...newItemArray[0],
          content: newItemArray[0].content.map((id) => parseInt(id, 10)),
        };
        const newObject = await createProgramObject(cleanItem);
        list.content.push(newObject);
      }
    }));
  }
  const cleanList = { ...list, content: list.content.filter((node) => typeof node !== 'number') };
  return cleanList;
}

async function recursiveProgramDelete(list) {
  if (containObject(list.content)) {
    await Promise.all(list.content.map(async (node) => {
      await recursiveProgramDelete(node);
    }));
  }
  await Programs.destroy({ where: { id: list.id } });
}

module.exports = {

  getAllPrograms: (req, res) => Programs.findAll({ raw: false })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send({ error: e.message })),

  getProgramById: (req, res) => Programs.findOne({ where: { id: res.locals.program_id } })
    .then((programCreated) => res.status(200).send(programCreated))
    .catch((e) => res.status(400).send({ error: e.message })),

  getProgramContentById: (req, res) => Programs
    .findAll({ where: { id: res.locals.program_id }, raw: true })
    .then((programCreated) => {
      if (programCreated[0].content) {
        const arrayId = programCreated[0].content.split(';');
        const cleanItem = {
          ...programCreated[0],
          content: arrayId.map((id) => parseInt(id, 10)),
        };
        return createProgramObject(cleanItem);
      }
      return programCreated[0];
    })
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

  programDelete: (req, res) => recursiveProgramDelete(res.locals.programs)
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send({ error: e.message })),
};
