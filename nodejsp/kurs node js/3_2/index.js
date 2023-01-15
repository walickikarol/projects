const http = require('http')
const requestListener = function(req,res){
    // if (req.url=== '/favicon.ico') return
   // console.log(req.headers)
    console.log('wszedł')
     //console.log(req.url)
     res.writeHead(200)
     res.write('<title>Node</title>')
     res.write('<h1>hello</h1>')
     res.end()
 }



const server = http.createServer(requestListener)

server.listen(3000,()=>{
    console.log('serwer słucha na 3000')
})