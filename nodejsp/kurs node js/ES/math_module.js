//sayHi = ()=> console.log('hi!!')//funkcja globalna, trzeba tego unikać
let x=11

export const add=(a,b)=>a+b //ES
// const add=(a,b)=>a+b //commonJS
const sub=(a,b)=>a-b
const log = ()=>console.log('Liczba x: ',x)
const changeX = (value) =>x=value
const data = 10

// commonJS
// module.exports =  {
//     add,
//     sub,
//     log,
//     changeX,
//     data
// }
// ES
export default {
    add,
    sub,
    log,
    changeX,
    data
}