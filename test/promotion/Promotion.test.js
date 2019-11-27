const httpMethod = require('../testApiMethodService');
const path = require('./rssFeed.json');

describe(`Test RssFeed Controller Api call`, () => {

    it(`Get all RssFeed`, async () => {
        const response = await httpMethod.get(`/rssFeed`).expect(200);
        expect(response.body).toStrictEqual(path);
        if (response.body.length > 1) {
            expect(response.body[0].id).toEqual(expect.any(Number));
            expect(response.body[0].title).toEqual(expect.any(String));
            expect(response.body[0].description).toEqual(expect.any(String));
            expect(response.body[0].link).toEqual(expect.any(String));
        }
    });

    it(`Get all RssFeed (fail)`, async () => {
        const response = await httpMethod.get(`/rssFeed`).expect(400);
        expect(response.body).toStrictEqual(path);
    });

    it(`Get one RssFeed by ID`, async () => {
        const response = await httpMethod.get(`/rssFeed/1`).expect(200);
        expect(response.body).toStrictEqual(path[0]);
        expect(response.body.id).toEqual(expect.any(Number));
        expect(response.body.title).toEqual(expect.any(String));
        expect(response.body.description).toEqual(expect.any(String));
        expect(response.body.link).toEqual(expect.any(String));
    });

    it(`Get one RssFeed by ID (Don't exist)`, async () => {
        await httpMethod.get(`/rssFeed/9999999999999`).expect(400);
    });

    it(`Create a new Rss Feed`, async () => {
        const body = {
            rssFeed: {
                title: 'Titre de test',
                link: 'http://liendetest.com',
                description: 'Description de test',
            },
        };
        const response = await httpMethod.post(`/rssFeed`, body).expect(200);
        expect(response.body.id).toEqual(expect.any(Number));
        expect(response.body.title).toEqual(body.rssFeed.title);
        expect(response.body.description).toEqual(body.rssFeed.description);
        expect(response.body.link).toEqual(body.rssFeed.link);
    });

    it(`Create a new Rss Feed (fail : missing one argument (title))`, async () => {
        const body = {
            rssFeed: {
                link: 'http://liendetest.com',
                description: 'Description de test',
            },
        };
        await httpMethod.post(`/rssFeed`, body).expect(400);
    });

    it(`Update a new Rss Feed`, async () => {
        const body = {
            rssFeed: {
                title: 'Titre de test',
                link: 'http://liendetest.com',
                description: 'Description de test',
            },
        };
        const bodyUpdate = {
            rssFeed: {
                title: 'Titre de test updated',
                link: 'http://liendetestupdated.com',
                description: 'Description de test updated',
            },
        };
        const resFromPost = await httpMethod.post(`/rssFeed`, body).expect(200);
        const rssFeedCreated = resFromPost.body;
        await httpMethod.put(`/rssFeed/${rssFeedCreated.id}/update`, bodyUpdate).expect(200);
        const rssFeedUpdated = bodyUpdate.rssFeed;
        rssFeedUpdated.id = rssFeedCreated.id;
        const resFromGet = await httpMethod.get(`/rssFeed`).expect(200);
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
        await httpMethod.put(`/rssFeed/9999999999999/update`, body).expect(400);
    });

    it(`Delete a new Rss Feed`, async () => {
        const body = {
            rssFeed: {
                title: 'A supprimer',
                link: 'http://liendetest.com',
                description: 'Description à supprimer',
            },
        };
        const resFromPost = await httpMethod.post(`/rssFeed`, body).expect(200);
        const rssFeedCreated = resFromPost.body;
        await httpMethod.delete(`/rssFeed/${rssFeedCreated.id}`).expect(200);
        const resFromGet = await httpMethod.get(`/rssFeed`).expect(200);
        const rssFeedList = resFromGet.body;
        if (rssFeedList.length > 1) {
            expect(rssFeedList).not.toContainObject(body.rssFeed)
        }
    });

    it(`Delete a new Rss Feed (fail)`, async () => {
        await httpMethod.delete(`/rssFeed/9999999999999`).expect(400);
    });

    it(`Test all rssFeed routes with user permissions`, async () => {
        const body = {
            rssFeed: {
                title: 'Titre de test de route',
                link: 'http://liendetestderoute.com',
                description: 'Description de test de route',
            },
        };

        await httpMethod.get(`/rssFeed`).expect(200);
        await httpMethod.get(`/rssFeed/1`).expect(200);
        await httpMethod.post(`/rssFeed`, body).expect(401);
        await httpMethod.put(`/rssFeed/1/update`, body).expect(401);
        await httpMethod.delete(`/rssFeed/1`).expect(401);
    });

});
