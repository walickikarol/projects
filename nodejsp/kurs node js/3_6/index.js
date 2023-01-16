const express = require('express')
const app = express()
const port =3000

app.get('/',(req,res)=>{
    res.send('hello express')
})
app.get('/firmy/:name',(req,res)=>{
    console.log(req.params)
    res.send('hello kontakt')
})
app.listen(port)

