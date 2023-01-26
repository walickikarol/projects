const express = require('express')
// import chalk from 'chalk'
const app = express()
const port =3000
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))
const users=[
    {id:1, name:'Janek', email:'janek@gmail.com'},
    {id:2, name:'adam', email:'adam@gmail.com'},
    {id:3, name:'tomek', email:'tomek@gmail.com'},
    {id:4, name:'dawid', email:'dawid@gmail.com'},
]
app.get('/',(req,res)=>{
    res.render('home',{
        title: 'Strona główna'
    })
    //debugger
    // console.log(chalk.blue(req.params.name));
    const m=process.memoryUsage()
    console.log(m.rss/1024/1024)

    // res.send(`Strona Głównaaaaa
    // <p>Przejdź do <a href="/kontakt">kontakt</a></p>
    // <p>Przejdź do <a href="/profile">profile</a></p>`
    // )
    res.render('home')
})
app.get('/kontakt',(req,res)=>{
    res.send(`kontakt
    <p>Przejdź do <a href="/">Strony głównej</a></p>
    <p>Przejdź do <a href="/profile">profile</a></p>`
    )
})
app.get('/firmy/:name', (req,res)=>{
    const{name}=req.params
    const companies = [
        {slug: 'tworcastron', name: 'Tworca stron.pl'},
        {slug: 'brukmode', name: 'Bruk Mode'},
    ]
    const company = companies.find(x=>x.slug === name)
   
        res.render('company', {
            name: company?.name,
            companies,
            title: company?.name ?? 'Brak wyników'
        })
   
})

app.get('/profile',(req,res)=>{
    let html = `Znaleziono ${users.length} profile<br>`
    users.forEach(user=>html+=
        `- <a href="/profile/${user.id}">${user.name} (id: ${user.id})</a><br>`)
    res.send(`profile
    <p>Przejdź do <a href="/">Strony głównej</a></p>
    <p>Przejdź do <a href="/kontakt">kontakt</a></p>
    <p>${html}</p>`
    )
})

app.get('/profile/:id/:mode?',(req,res)=>{
    const {id,mode}=req.params
    const user = users.find(x=>x.id===parseInt(id))
    if (!user) {
        return res.send('nie ma')
    }
    let html = `Dane użytkownika:: imię "${user.name}"`
    if(mode&&mode==='szczegoly'){
        html +=`, id "${user.id}", email "${user.email}"`
    }
    res.send(html)
    
})
app.get('*', (req,res)=>{
    res.render('errors/404')
})
app.listen(port)

