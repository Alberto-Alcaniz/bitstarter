mar express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');


app.get('/', function(request, response) {
//  response.send('Hello World2!');
    var buffer = new Buffer( fs.readFileSync('index.html') ); 
    response.send( buffer.toString('utf8', 0, 25) );

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
