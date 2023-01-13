setTimeout(()=>{            //setTimeout jest wrzucany na bok podobnie jak fetch
    console.log('timeout')
},0)
console.log(2)
console.log(3)



//imitacja funkcji fetch
const fetch =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({ user: 'Jon', age: '28 '}),1000)
    })
}
// 
const data = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=> console.log(res)) //również asynchroniczne
console.log(data)

const asyncFunc = async()=>{
    const data2 =await fetch('https://jsonplaceholder.typicode.com/todos/1') //również asynchroniczne
    console.log(data2)
}
asyncFunc()