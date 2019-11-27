const express = require('express');

const router = express.Router();
const RssFeedController = require('../controllers/rssFeed/RssFeedController');
const validator = require('../middlewares/joi/joiValidator');
const schemas = require('../service/joi/schemas/schemas');

/* GET promotion. */
router.get('/', RssFeedController.getAllRssFeed);

router.post('/',
  validator.joiObjectValidator(schemas.rssFeedSchemas.create, 'rssFeed'),
  RssFeedController.rssFeedCreate);

router.get('/:rssfeed_id',
  validator.joiIdValidator('rssfeed_id'),
  RssFeedController.getRssFeedById);

router.put('/:rssfeed_id/update',
  validator.joiIdValidator('rssfeed_id'),
  validator.joiObjectValidator(schemas.rssFeedSchemas.update, 'rssFeed'),
  RssFeedController.rssFeedUpdate);

router.delete('/:rssfeed_id',
  validator.joiIdValidator('rssfeed_id'),
  RssFeedController.rssFeedDelete);

module.exports = router;
