const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

  const add=require('./math.js')
const asyncFunc = async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json()
    console.log(data)
}
asyncFunc()

 console.log(add(2,4))
