const { Users, Promotions } = require('../../models');

module.exports = {
  getAllPromotion: (req, res) => Promotions.findAll({ raw: true })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send(e)),

  getPromotionById: (req, res, next) => Promotions.findOne({ where: { id: res.locals.promotion_id } })
    .then((promotionCreated) => res.status(200).send(promotionCreated))
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
    const promotionId = parseInt(res.locals.promotion_id);
    return Promotions.update({ ...promotion }, { where: { id: promotionId } })
      .then((promotionUpdated) => res.status(200).send(promotionUpdated))
      .catch((e) => res.status(400).send(e));
  },

  promotionDelete: (req, res) => Promotions.destroy({ where: { id: res.locals.promotion_id } })
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send(e)),
};
