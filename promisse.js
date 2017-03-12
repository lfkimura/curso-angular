var http = require('http');

http.createServer(function(req, res){ 
	console.log(req.url)
	console.log(req.headers)
	console.log(res.status)
	res.end("<html><body><h1>Listando os produtos</h1></body></html>"); 
	}).listen(3001, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});


var http = require('http');

var server = http.createServer()
server.listen(3000);
console.log('servidor rodando');
