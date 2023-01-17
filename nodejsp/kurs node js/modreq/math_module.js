sayHi = ()=> console.log('hi!!')//funkcja globalna, trzeba tego unikać
let x=11

const add=(a,b)=>a+b
const sub=(a,b)=>a-b
const log = ()=>console.log('Liczba x: ',x)
const changeX = (value) =>x=value
module.exports = {
    add,
    sub,
    log,
    changeX
}