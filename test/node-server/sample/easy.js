var http = require('http')

var server = http.createServer(function(request,response){
    setTimeout(function(){
        response.setHeader('Content-type','text/html;charset=utf-8')
        response.writeHead(200,'Success')
        response.write('<html><head><meta charset="gbk"/><title>node</title></head>')
        response.write('<body>')
        response.write('<h1>Hi</h1>')
        response.write('</body>')
        response.write('</html>')
        response.end()
    },3000);

})
console.log('fanison')
console.log('open http://localhost:8080')
server.listen(8080)