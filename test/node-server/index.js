var http = require('http')
var fs = require('fs')
var url = require('url')



http.createServer(function(req, res){

  var pathObj = url.parse(req.url, true)
  console.log(pathObj)

  switch (pathObj.pathname) {
    case '/server.js':
      res.end(fs.readFileSync(__dirname+ '\\server.js'))
      break;
    case '/sample/test.html':
      res.end(fs.readFileSync(__dirname+ '\\sample\\test.html'))
    //   res.end( fs.readFileSync( '/sample/test.html' ))
      break;
    default:
      res.end('not found')
  }
}).listen(8080)
console.log('open http://localhost:8080')