const supertest = require("supertest");
const app = require('../index');

describe('GET /', ()=>{
    it('should return success message', async ()=>{
        const res = await reuest(app);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('CI/CD pipeling is working');
    });
});