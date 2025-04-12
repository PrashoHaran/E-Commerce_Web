// tests/integration/api.test.js

const request = require('supertest');
const app = require('../../app'); // path to your Express app

describe('Integration Test: GET /api/products', () => {
  test('should return status 200 and an array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
