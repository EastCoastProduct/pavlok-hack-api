var request = require('supertest');
var app = require('../../../../app');


describe('controllers/utils/status', function () {

  it('shold return 200 response', function(done) {
    request(app)
      .get('/status')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '20')
      .expect(200)
      .end(function(err, res){
        if (err) throw err;
        done();
    });
  });

});
