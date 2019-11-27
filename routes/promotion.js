const express = require('express');
const router = express.Router();
const PromotionsController = require('../controllers/promotions/PromotionsController');
const validator = require('../middlewares/joi/joiValidator');
const schemas = require('../service/joi/schemas/schemas');

/* GET promotion. */
router.get('/', PromotionsController.getAllPromotion);

router.post('/',
    validator.joiObjectValidator(schemas.promotionSchemas.create, "promotion"),
    PromotionsController.promotionCreate,
);

router.get('/:promotion_id',
    validator.joiIdValidator("promotion_id"),
    PromotionsController.getPromotionById,
);

router.put('/:promotion_id/update',
    validator.joiIdValidator("promotion_id"),
    validator.joiObjectValidator(schemas.promotionSchemas.update, "promotion"),
    PromotionsController.promotionUpdate,
);

router.delete('/:promotion_id',
    validator.joiIdValidator("promotion_id"),
    PromotionsController.promotionDelete,
);

module.exports = router;
