// test/hello_test.js
const request = require("supertest");
const assert = require("assert");
const app = require("../app");
const mongoose = require('mongoose');
const nodeEnv = process.env.NODE_ENV || "test";
const config = require("../config.json")[nodeEnv];
mongoose.Promise = require("bluebird");

var item ={
  id:"",
  cost:"",
  quantity:""
};

before("connect to Mongo", function(done){
  mongoose.connect(config.mongoURL).then(done);
});

after("drop database", function(done){
  mongoose.connection.dropDatabase(done);
});

describe("GET /customers/items", function () {

  it("should return successfully", function (done) {
    request(app)
      .get("/api/customer/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

});

it('should respond with the details of the transaction', function (done){
  request(app)
  .post('/api/customer/items/:itemId/purchases')
  .send({item})
  .expect(200)
  .expect('Content-Type', /json/)
  .end(function(err, res){
    if (err) done(err);
    res.body.should.have.property('items');
    res.body.should.have.property('purchase status');
  })

})
