const bcrypt = require('bcryptjs');
const { Users, Promotions, Programs } = require('../../models');

const saltRounds = 10;

const removeTeachers = async (promoId) => {
  const teachersToRemove = await Users.findAll({
    where: {
      promotionId: promoId,
      role: 2,
    },
    raw: true,
  });
  if (teachersToRemove) {
    await Promise.all(
      await teachersToRemove.forEach(async (teacherToRemove) => {
        await Users.update(
          { promotionId: null },
          { where: { id: teacherToRemove.id } },
        ))
      } 
    );
  }
return teachersToRemove;
};

const removeStudents = async (promoId) => {
  const studentsToRemove = await Users.findAll({
    where: {
      promotionId: promoId,
      role: 3,
    },
    raw: true,
  });
  if (studentsToRemove) {
    await Promise.all(
      await studentsToRemove.forEach(async (studentToRemove) => Users.update(
        { promotionId: null },
        { where: { id: studentToRemove.id } },
      )),
    );
  }
  return studentsToRemove;
};

const updateTeachers = async (teachers, promoId) => {
  const updatedTeachers = await teachers.forEach(async (teacher) => {
    await Users.update(
      { promotionId: promoId },
      { where: { id: teacher.value } },
    );
  });
  return updatedTeachers;
};


// const updateStudents = async (students, promoId) => {
//   const registeredPomoStudents = await Users.findAll({ where: { promotionId: promoId, role: 3 } });

//   console.log('PROMOSTUD', registeredPomoStudents);

//   // DELETING EXISTING STUDENTS NOT IN PROMO ANYMORE
//   if (registeredPomoStudents) {
//     await Promise.all(
//       registeredPomoStudents.forEach((registeredStudent) => students.some(
//         async (updatedStudent) => {
//           if (registeredStudent.id !== updatedStudent.id) {
//             await Users.destroy(
//               { where: { id: registeredStudent.id } },
//             );
//           }
//         },
//       )),
//     );
//   }

//   // STUDENTS UPDATE
//   await students.forEach(async (student) => {
//     const foundStudent = await Users.findOne({ where: { email: student.email } });
//     // EXISTING STUDENTS UPDATE//
//     if (foundStudent && foundStudent.promotionId !== promoId) {
//       await Users.update(
//         { promotionId: promoId },
//         { where: { id: foundStudent.id } },
//       );
//     }

//     // UNKNOWN STUDENT CREATION//
//     if (!foundStudent) {
//       const hash = await bcrypt.hash(student.password, saltRounds);
//       const newStudent = {
//         ...student,
//         promotionId: promoId,
//         password: hash,
//       };
//       await Users.create(newStudent);
//     }
//   });
//   return students;
// };


module.exports = {
  getAllPromotion: (req, res) => Promotions.findAll({ raw: true })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send(e)),

  getPromotionById: (req, res) => Promotions.findOne({ where: { id: res.locals.promotion_id } })
    .then((promotionCreated) => res.status(200).send(promotionCreated))
    .catch((e) => res.status(400).send(e)),

  getPromotionDetailsById: (req, res) => Promotions
    .findOne({ where: { id: res.locals.promotion_id } })
    .then((promotion) => {
      const result = Promise.all([
        Programs.findOne({ where: { id: promotion.programId } }),
        Users.findAll({ where: { promotionId: promotion.id } }),
      ]).then((promiseAllResult) => [promotion, promiseAllResult]);
      return result;
    })
    .then((result) => {
      const promotionsDetail = {
        promotion: result[0],
        users: result[1][1],
        program: result[1][0],
      };
      return promotionsDetail;
    })
    .then((promotionDetails) => res.status(200).send(promotionDetails))
    .catch((e) => res.status(400).send(e)),

  promotionCreate: async (req, res) => {
    const { promoData, teachers } = req.body;
    try {
      const promo = await Promotions.create(promoData);
      await teachers.map((teacher) => Users.update(
        { promotionId: promo.id },
        { where: { id: teacher.value } },
      ));

      return res.status(201).send(promo);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  promotionUpdate: async (req, res) => {
    const { promoData, users } = req.body;
    const id = res.locals.promotion_id;
    try {
      await removeTeachers(id);
      await updateTeachers(users.teachers, id);
      await removeStudents(id);

      // await updateStudents(users.students, id);
      const promoUpdated = await Promotions.update({ ...promoData }, { where: { id } });
      return res.status(201).send(promoUpdated);
    } catch (error) {
      return res.status(409).json(error);
    }
  },

  promotionDelete: async (req, res) => {
    try {
      const users = await Users.findAll({
        attributes: { exclude: ['password'] },
        includes: [{
          model: Promotions,
          where: { id: res.locals.promotion_id },
        }],
      });

      users.forEach((user) => {
        if (user.role === 3) {
          Users.destroy({ where: { id: user.id } });
        } else if (user.role === 2) {
          Users.update(
            { promotionId: null },
            { where: { id: user.id } },
          );
        }
      });

      const deletedPromo = await Promotions.destroy({ where: { id: res.locals.promotion_id } });

      return res.status(200).json(deletedPromo).send('Deleted');
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
