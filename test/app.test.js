import { test } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../app.js';

test('GET / should return "Hola API Base ver. 2.0"', async () => {
  const response = await request(app).get('/');
  assert.strictEqual(response.status, 200);
  assert.deepStrictEqual(response.body, { message: 'Hola API Base ver. 2.0' });
});
