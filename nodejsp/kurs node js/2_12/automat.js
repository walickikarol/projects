

// const kawa = (name='')=>{
//     const args = process.argv.splice(2)
//     console.log(args,'args')
//     for (const a of args) {
//     const arr=a.split('=')
//     console.log(arr,'arr')
//     if(arr[0]==='name'){
//         name='Sok'
//     }
// }
//     console.log('Przygotowuję',name,'o pojemności ', name,'ml')
// }
// kawa()

// 1. Napisz program do parzenia napojów

// komenda: node automat.js name=juice size=30
// rezultat:
"Przygotowuję Sok o pojemności 30ml"

// komenda: node automat.js name=coffe size=50
// rezultat:
"Przygotowuję Kawę o pojemności 50ml"

const options = {};
// const arg1=process.argv.splice(2)
// console.log(arg1)
const arg = process.argv.splice(2).forEach(x => {
  const parts = x.split('=');
        console.log(parts,'parts')
  options[parts[0]] = parts[1]; //
        console.log(parts,'pierwszy')
        console.log(typeof options)
        console.log(options,'options')
})
console.log(arg)
;


function makeDrink(name, size) {
  let drink;
  switch (name) {
    case 'juice': drink = 'Sok'; break;
    case 'coffe': drink = 'Kawę'; break;
    case 'shit': drink = 'Gówno'; break;
    default: throw new Error('Nie ma takiego napoju!')
  }
  
  const text = `Przygotowuję ${drink} o pojemności ${size}ml`;
  console.log(text);
}

makeDrink(options.name, options.size)
