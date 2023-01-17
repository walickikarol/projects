const http = require('http')
const port=3000
const requestListener = function(req,res){
    // if (req.url=== '/favicon.ico') return
   // console.log(req.headers)
    console.log('wszedł')
     console.log(req.url)
     const chunks=[]
     if (req.url==='/kontakt') {
         res.write('<h1>Kontakt</h1>')
         res.write('<title>Kontakttitle</title>')
         return res.end()
     }
     if (req.url==='/') {
         req.on('data',(chunk)=>{
            chunks.push(chunk)
         }).on('end',()=>{
            const body=Buffer.concat(chunks).toString()
            console.log(body)
         })
         res.writeHead(200)
         res.write('<title>Node</title>')
         res.write('<h1>hello</h1>')
         return res.end()
         
        }
        res.write('<h1>404</h1>')
        return res.end()
 }



const server = http.createServer(requestListener)

server.listen(port,()=>{
    console.log(`serwer słucha na ${port}`)
})