const httpMethod = require('../testApiMethodService');
const path = require('./rssFeed.json');

describe(`Test RssFeed Controller Api call`, () => {

    it(`Get all RssFeed`, async () => {
        const response = await httpMethod.get(`/api/rssFeed`).expect(200);
        if (response.body.length > 1) {
            expect(response.body[0].id).toEqual(expect.any(Number));
            expect(response.body[0].title).toEqual(expect.any(String));
            expect(response.body[0].description).toEqual(expect.any(String));
            expect(response.body[0].link).toEqual(expect.any(String));
        }
    });

    it(`Get all RssFeed (fail)`, async () => {
        const response = await httpMethod.get(`/api/rssFeeds`).expect(404);
    });

    it(`Get one RssFeed by ID`, async () => {
        const response = await httpMethod.get(`/api/rssFeed/1`).expect(200);
        expect(response.body.id).toEqual(expect.any(Number));
        expect(response.body.title).toEqual(expect.any(String));
        expect(response.body.description).toEqual(expect.any(String));
        expect(response.body.link).toEqual(expect.any(String));
    });

    it(`Get one RssFeed by ID (Don't exist)`, async () => {
        await httpMethod.get(`/api/rssFeed/9999999999999`).expect(200);
    });

    it(`Create a new Rss Feed`, async () => {
        const body = {
                title: 'Titre de test',
                link: 'http://liendetest.com',
                description: 'Description de test',
        };
        const response = await httpMethod.post(`/api/rssFeed`, body).expect(201);
        expect(response.body.id).toEqual(expect.any(Number));
        expect(response.body.title).toEqual(body.title);
        expect(response.body.description).toEqual(body.description);
        expect(response.body.link).toEqual(body.link);
    });

    it(`Create a new Rss Feed (fail : missing one argument (title))`, async () => {
        const body = {
                link: 'http://liendetest.com',
                description: 'Description de test',
        };
        await httpMethod.post(`/api/rssFeed`, body).expect(422);
    });

    it(`Update a new Rss Feed`, async () => {
        const body = {
                title: 'Titre de test',
                link: 'http://liendetest.com',
                description: 'Description de test',
        };
        const bodyUpdate = {
                title: 'Titre de test updated',
                link: 'http://liendetestupdated.com',
                description: 'Description de test updated',
        };
        const resFromPost = await httpMethod.post(`/api/rssFeed`, body).expect(201);
        const rssFeedCreated = resFromPost.body;
        bodyUpdate.id = rssFeedCreated.id;
        await httpMethod.put(`/api/rssFeed/${rssFeedCreated.id}/update`, bodyUpdate).expect(200);
        const rssFeedUpdated = bodyUpdate;
        rssFeedUpdated.id = rssFeedCreated.id;
        const resFromGet = await httpMethod.get(`/api/rssFeed`).expect(200);
        const rssFeedList = resFromGet.body;
        if (rssFeedList.length > 1) {
            expect(rssFeedList).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining(rssFeedCreated)
                ])
            );
            expect(rssFeedList).not.toContainObject(rssFeedCreated);
            expect(rssFeedList).toContainObject(rssFeedUpdated);
        }
    });

    it(`Update a new Rss Feed (fail)`, async () => {
        const bodyUpdate = {
            title: 'Titre de test updated',
            link: 'http://liendetestupdated.com',
            description: 'Description de test updated',
        };
        await httpMethod.put(`/api/rssFeed/1/update`, bodyUpdate).expect(422);
    });

    it(`Delete a new Rss Feed`, async () => {
        const body = {
                title: 'A supprimer',
                link: 'http://liendetest.com',
                description: 'Description à supprimer',
        };
        const resFromPost = await httpMethod.post(`/api/rssFeed`, body).expect(201);
        const rssFeedCreated = resFromPost.body;
        await httpMethod.delete(`/api/rssFeed/${rssFeedCreated.id}`).expect(200);
        const resFromGet = await httpMethod.get(`/api/rssFeed`).expect(200);
        const rssFeedList = resFromGet.body;
        if (rssFeedList.length > 1) {
            expect(rssFeedList).toContainObject(body)
        }
    });

    it(`Delete a new Rss Feed (fail)`, async () => {
        await httpMethod.delete(`/api/rssFeed/9999999999999`).expect(200);
    });

});
