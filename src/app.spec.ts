import { User } from './model/user.model';
/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest';
import { fakeUsers } from './services/users.stab';

describe('App', () => {
  let app: undefined;

  beforeEach(() => {
    app = require('../dist/app');
  });

  it('should request users', async () => {
    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
  });

  it('should get specific user', async () => {
    const response = await request(app).get('/users/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'name-2' }]);
  });

  it('should delete specific user', async () => {
    const response = await request(app).delete('/users/1');
    const toEqual: Array<User> = fakeUsers().filter(user => user.id !== 1);

    expect(response.statusCode).toBe(200);
    expect(response.body.items).toStrictEqual(toEqual);
  });
});
