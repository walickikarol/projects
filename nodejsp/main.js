const stuff=require('./utils')
const fs = require('fs')

console.log(stuff.add(5,3))
console.log(stuff.sub(5,3))
let sum = stuff.add(10,3)
let diff = stuff.sub(10,3)

console.log(sum)
console.log(diff)

fs.writeFileSync('wyniki.txt',`Wynik dodawania: ${sum}`)
fs.appendFileSync('wyniki.txt',', natomiast wynik odejmowania to: '+diff)
fs.readFileSync('wyniki.txt')
let wyniki = fs.readFileSync('wyniki.txt')
console.log(wyniki.toString())