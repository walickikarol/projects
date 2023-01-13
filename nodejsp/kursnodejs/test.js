const args = process.argv.splice(2) //process.argv zwraca tablicę [1] - program ktory sie uruchamia czyli node, 
                                    // [2]-plik ktory uruchamiam
                                    //[3] - ewentualny parametr np: name=Karol
                                    //metoda splice odrzuca 2 pierwsze wartosci zostawiajać kolejne
let argName
for (const a of args) {             //petla przechodząca przez wartosci w tablicy args
const arr = a.split('=')            //split dzieli wartosc kazdego wyrazu tablicy dając nową tablice arr
if (arr[0] === 'name') {            
    argName = arr[1]
}
}
const sayHi=(name)=> {
    console.log(`Cześć ${name}!`)
}

sayHi(argName)

//console.log(process.argv)

const months = ['Jan', 'March', 'April', 'June'];
console.log(months.splice(2))
months.splice(2);
console.log(months);