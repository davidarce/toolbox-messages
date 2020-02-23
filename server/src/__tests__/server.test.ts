import request from 'supertest';
import { expect } from 'chai';
import server from '../server';

const initApp = () => {
  return server.getApp();
}

describe('POST /messages', () => {
  test('It should receive and response a message', async () => {
    const app = initApp();

    const response = await request(app).post('/messages')
      .set('Content-Type', 'application/json')
      .send({ message: 'Hello world' })
      .expect(201);

    expect(response.body.value).to.equal('Hello world');
  });
})