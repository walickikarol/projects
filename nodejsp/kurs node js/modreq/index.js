// const math=require('./math_module') //commonJS, teraz jest import/export

// console.log(math.add(2,4))
// console.log(math.sub(2,4))

require('./core')
const {add, sub, log}=require('./math_module') //commonJS, teraz jest import/export

console.log(add(2,4))
console.log(sub(2,4))
sayHi()
//console.log(global)
log()