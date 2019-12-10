const { Users, Promotions, Programs } = require('../../models');

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
    const { newPromo, teachers } = req.body;
    try {
      const promo = await Promotions.create(newPromo);
      await teachers.map((teacher) => Users.update(
        { promotionId: promo.id },
        { where: { id: teacher.value } },
      ));
      return res.status(201).send(promo);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  promotionUpdate: (req, res) => {
    const { promotion } = res.locals;
    const promotionId = parseInt(res.locals.promotion_id, 10);
    return Promotions.update({ ...promotion }, { where: { id: promotionId } })
      .then((promotionUpdated) => res.status(200).send(promotionUpdated))
      .catch((e) => res.status(400).send(e));
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
            { promotionId: res.locals.promotion_id },
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
