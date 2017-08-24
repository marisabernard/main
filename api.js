module.exports = function(server) {
	server.get('/api', function(req, res){
		res.send("API");
	});
};