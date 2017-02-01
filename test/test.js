var expect = require('chai').expect;

var request = require("request");

var port = 3000;
var url = "http://localhost:" + port + "/";

var application = require('../index');

describe("My Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
		request.get(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});

    });
  });
});