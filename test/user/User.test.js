/* eslint-disable no-undef */
const httpMethod = require('../testApiMethodService');


describe('Test User Controller Api call', () => {
  let testUserId = '';
  let testUserRole = 0;
  it('Get all Users', async (done) => {
    const response = await httpMethod.get('/api/users').expect(200);
    if (response.body.length > 1) {
      expect(response.body[0].id).toEqual(expect.any(Number));
      expect(response.body[0].firstName).toEqual(expect.any(String));
      expect(response.body[0].lastName).toEqual(expect.any(String));
      expect(response.body[0].role).toEqual(expect.any(Number));
      done();
    }
  });

  it('Get all Users (fail)', async (done) => {
    await httpMethod.get('/api/user')
      .expect(404);
    done();
  });

  it('Create a new user with admin role', async (done) => {
    const body = {
      firstName: 'prénomTestPost',
      lastName: 'nomTestPost',
      role: 'admin',
      email: 'tatayoyo@gmail.com',
    };
    const response = await httpMethod.post('/api/users', body).expect(201);
    testUserId = response.body.id;
    testUserRole = response.body.role;
    expect(response.body.id).toEqual(expect.any(Number));
    expect(response.body.firstName).toEqual(body.firstName);
    expect(response.body.lastName).toEqual(body.lastName);
    expect(response.body.email).toEqual(body.email);
    expect(response.body.role).toEqual(2);
    expect(response.body.password).not.toEqual(body.password);
    done();
  });

  it('Update the created user', async (done) => {
    const bodyUpdate = {
      id: testUserId,
      firstName: 'prénomTestUpdate',
      lastName: 'nomTestUpdate',
      role: testUserRole,
      email: 'tatayoyo@gmail.com',
    };

    const response = await httpMethod.put(`/api/users/${testUserId}/update`, bodyUpdate).expect(200);

    expect(response.body[0]).toBe(1);

    done();
  });

  it('Delete the created user', async (done) => {
    await httpMethod.delete(`/api/users/${testUserId}`).expect(200);
    done();
  });
});
