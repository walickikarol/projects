const express = require('express')
const app = express()
const port =3000

app.get('/',(req,res)=>{
    res.send('hello express')
})
app.get('/firmy/:name',(req,res)=>{
    console.log(req.params)
    const {name}=req.params //const name = req.params.name
    const companies=[
        {slug:'tworcastron', name:'tworca StorageManager.pl'},
        {slug:'brukmode', name:'Bruk Mode'}
    ]
    const company=companies.find(x=>x.slug===name)
    if (company) {
        res.send(`Nazwa firmy ${company?.name}`)
    } else {
        res.send('Nie ma takiej firmy')
    }
})
app.listen(port)

