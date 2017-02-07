var expect = require('chai').expect;

var request = require('request');
var fs = require('fs');
var port = 3000;
var url = "http://localhost:" + port + "/";

var application = require('../index');

describe("My Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
		var req = request.get(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
    });
    it("returns status code 200 for a file post", function(done) {
		var req = request.post(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
		fs.createReadStream('./test/resources/simpleOneLineFile').pipe(req);
    });
    
  });
});