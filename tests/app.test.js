import request from 'supertest';
import app from '../app';

describe('GET /', () => {
    it('should return a JSON message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hola API Base' });
    });
});


