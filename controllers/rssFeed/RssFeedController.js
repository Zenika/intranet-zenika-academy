const { RssFeeds } = require('../../models');

module.exports = {
  getAllRssFeed: (req, res) => RssFeeds.findAll({ raw: true })
    .then((content) => res.send(content))
    .catch((e) => res.status(400).send(e)),

  getRssFeedById: (req, res) => RssFeeds.findOne({ where: { id: res.locals.rssfeed_id } })
    .then((rssCreated) => res.status(200).send(rssCreated))
    .catch((e) => res.status(400).send(e)),

  rssFeedCreate: (req, res) => {
    const { rssFeed } = res.locals;
    return RssFeeds.create(rssFeed)
      .then((rssCreated) => res.status(201).send(rssCreated))
      .catch((e) => res.status(400).send(e));
  },

  rssFeedUpdate: (req, res) => {
    const { rssFeed } = res.locals;
    const rssFeedId = parseInt(res.locals.rssfeed_id);
    return RssFeeds.update({ ...rssFeed }, { where: { id: rssFeedId } })
      .then((rssUpdated) => res.status(200).send(rssUpdated))
      .catch((e) => res.status(400).send(e));
  },

  rssFeedDelete: (req, res) => RssFeeds.destroy({ where: { id: res.locals.rssfeed_id } })
    .then(() => res.status(200).send('Deleted'))
    .catch((e) => res.status(400).send(e)),
};
