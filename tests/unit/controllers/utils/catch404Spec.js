var catchController = require('../../../../src/controllers/utils/catch404');;
var app = require('../../../../app');
var httpMocks = require('node-mocks-http');
var sinon = require('sinon');
var should = require('should');

describe('controllers/utils/catch404', function () {

  var next = sinon.spy();

  afterEach(function() {
    next.reset();
  });

  it('should call next with 404 error', function() {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();
    catchController(req, res, next);
    sinon.assert.calledOnce(next);
    var err = next.getCall(0);
    err.args[0].status.should.be.exactly(404);
  });

});
