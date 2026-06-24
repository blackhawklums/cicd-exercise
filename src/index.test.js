const request = require('supertest');
const app = require('./index');

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /greet', () => {
  it('greets World by default', async () => {
    const res = await request(app).get('/greet');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, World! 👋');
  });

  it('greets a named person', async () => {
    const res = await request(app).get('/greet?name=Alice');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, Alice! 👋');
  });
});