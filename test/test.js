const request = require('supertest');
const app = require('../app');
const assert = require('assert');


describe('App', function () {
  it('has the default page', function (done) {
    request(app)
      .get('/')
      .expect(/Boyuan Interview/, done);
  });
});


// API tests
const exact_result = [
  {
    "id": 2,
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
    "Origin": "USA"
  }
];
describe('POST /api/name_exact', function () {
  it('Query exact name', function (done) {
    request(app)
      .post('/api/name_exact')
      .send({ 'name': "buick skylark 320" })
      .expect(200)
      .then((res) => {
        assert(res.body.data, exact_result)
        done()
      }).catch((err) => {
        done(err)
      })
  });
});

describe('POST /api/name_contain', function () {
  it('query name contain', function (done) {
    request(app)
      .post('/api/name_contain')
      .send({ name: "320" })
      .expect(200)
      .then((res) => {
        assert(res.body.data.length, 2)
        done()
      }).catch((err) => {
        done(err)
      })
  });
});