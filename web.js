var express = require('express');

var app = express.createServer(express.logger());

//var fs = require('fs');


app.get('/', function(request, response) {
//  response.send('Hello World2!');
    var buffer = new Buffer( 256 ); 
//    buffer.write( fs.readFileSync('index.html') );
    buffer.write('Hellor World buffer!');
    response.send( buffer.toString('utf8') );
//    response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
