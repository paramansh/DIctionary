var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer( function (request, response) {

   var pathname = url.parse(request.url).pathname;
   if(pathname==="/output.html")
   	var query = url.parse(request.url).query;
  	var ismeanings=false;
   	var toprint = "ghj";
   if(pathname==="/output.html")
   {
     var mymodule = require("./client.js");
   	 mymodule(query,callback2);
     function callback2(data)
   	 {

   	 		console.log("in callback2 " + data);
        console.log(request.url);
  	 		toprint = data;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(toprint);
        // response.end();
   	 }
    //  response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write(toprint);
   } else {

     console.log("Request for " + pathname + " received.");

     fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else
      {
         response.writeHead(200, {'Content-Type': 'text/html'});
         response.end(data.toString());
      }
      response.end();
   });
 }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
