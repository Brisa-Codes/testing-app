const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const server = require('../app');
const logger = require('../logger/logger');

describe('/register', () => {
    it('should return the register req', (done) => {
        chai.request('http://localhost:4040')
        .get('/register')
        .end((err, res) => {
            expect(res.status).to.be(200);
            expect(err).to.be.null;
            res.body.should.have.property('name');
            expect(attributes.name).to.eql('string');
            logger.info('Page rendered successfully');
            done();
        });
        });

        it('should run api request', (done) => {
        chai.request('http://localhost:4040')
            .get('/register')
            .end((err, res) => {
                //res.should.have.status(200);
                expect(res.status).to.be(404);
                expect(err).to.be.null;
                logger.info('test failed');
                done();
            })
        });
});
