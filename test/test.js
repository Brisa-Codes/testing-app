const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('/GET Testing APIs', () => {
    it('should GET register', () => {
        chai.request(app)
        .get('/register')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
        });
    });

    // post test
    it('should POST register', () => {
        chai.request(app)
        .post('/register')
        .send({
            sirname: 'sirname',
            givenname: 'givenname',
            nin: 'nin',
            dob: 'dob',
            occupation: 'occupation',
            work: 'work',
            gender: 'gender',
            loan: 100000,
            security: 'security',
            fallback: 'fallback'
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
        });
    });
});
