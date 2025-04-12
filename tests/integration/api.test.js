const request = require('supertest');
const app = require('../../app');  // Adjust path to your main app file

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});