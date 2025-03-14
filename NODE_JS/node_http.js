const http = require('http');
const server = http.createServer(function(req,res){
      if(req.url === '/api'){
      res.end("hello world hi");
      }
      else{
            res.statusCode = 404;
            res.end("not found");
      }
});
server.listen(5000);