const fs = require('fs')
console.log('heloo node')
// fs.writeFileSync('first.txt', 'mój pierwszy plik')
// fs.appendFileSync('./first.txt', ' stworzony w node.js')


let odczytane = fs.readFileSync('./first.txt'/*,{encoding: 'utf8'}*/)
console.log(odczytane.toString())
//jeśli utf to bez toString()

