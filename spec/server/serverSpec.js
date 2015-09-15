var app  = require('../../server/server.js');

describe("Server", function() {

  it("responds with 200 to requests to '/'", function(done){
    request(app).get('/').expect(200, done);
  });
// More tests here
