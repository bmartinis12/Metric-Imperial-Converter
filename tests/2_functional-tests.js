const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Test GET /api/convert 10L', function(done) {
    let output = {
      initNum: '10',
      initUnit: "L",
      returnNum: 2.64172,
      returnUnit: "gal",
      string: "10 liters converts to 2.64172 gallons"
    }
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.deepEqual(res.body, output);
        done();
      });
  });

  test('Test GET /api/convert 32g Invalid', function(done) {
    let output = 'invalid unit'
    chai
      .request(server)
      .get('/api/convert?input=32g')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "text/html");
        assert.deepEqual(res.text, output);
        done();
      });
  });

  test('Test GET /api/convert 3/7.2/4kg Invalid', function(done) {
    let output = 'invalid number'
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "text/html");
        assert.deepEqual(res.text, output);
        done();
      });
  });

  test('Test GET /api/convert 3/7.2/4kilomegagram Invalid', function(done) {
    let output = 'invalid number and unit'
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "text/html");
        assert.deepEqual(res.text, output);
        done();
      });
  });

  test('Test GET /api/convert kg', function(done) {
    let output = {
      initNum: 1,
      initUnit: "kg",
      returnNum: 2.20462,
      returnUnit: "lbs",
      string: "1 kilograms converts to 2.20462 pounds"
    }
    chai
      .request(server)
      .get('/api/convert?input=kg')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.deepEqual(res.body, output);
        done();
      });
  });
});
