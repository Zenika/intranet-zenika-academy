const { Users, Promotions, Programs } = require('../../models');

module.exports = {
  getAllPromotion: (req, res) => Promotions.findAll({ raw: true })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send(e)),

  getPromotionById: (req, res, next) => Promotions.findOne({ where: { id: res.locals.promotion_id } })
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

  promotionCreate: (req, res) => {
    const { promotion } = res.locals;
    return Promotions.create(promotion)
      .then((promotionCreated) => res.status(201).send(promotionCreated))
      .catch((e) => res.status(400).send(e));
  },

  getAllUsersFromPromo: async (req, res) => {
    const promoId = Number(res.locals.promotion_id);
    try {
      const promoUsers = await Users.findAll({
        attributes: { exclude: ['password'] },
        includes: [{
          model: Promotions,
          where: { id: promoId },
        }],
      });
      return res.status(200).json(promoUsers);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  promotionUpdate: (req, res) => {
    const { promotion } = res.locals;
    const promotionId = parseInt(res.locals.promotion_id);
    return Promotions.update({ ...promotion }, { where: { id: promotionId } })
      .then((promotionUpdated) => res.status(200).send(promotionUpdated))
      .catch((e) => res.status(400).send(e));
  },

  promotionDelete: (req, res) => Promotions.destroy({ where: { id: res.locals.promotion_id } })
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send(e)),
};
