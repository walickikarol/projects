const tablica = ['1=karol','2=walicki','3=js','4=backend']
const options = {};
const optab=[]
// const arg1=process.argv.splice(2)
// console.log(arg1)
const arg = tablica.forEach(x => {
  const parts = x.split('=');
        
  options[parts[0]] = parts[1]; //to robi zajebisty obiekt!!! na pamięć
  optab.push(parts)
        console.log(options,'options')
        console.log(optab,'optab')
        console.log(parts,'parts')
})


console.log(optab.flat(Infinity))