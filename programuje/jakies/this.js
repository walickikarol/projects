const human = {
    name: 'tom',
    sayName() {
        console.log(`my name is ${this.name}`)
    }
}
const personA = {
    name: 'artur',
    // sayName: human.sayName
}
// personA.sayName()
human.sayName.call(personA)

///////////////////////////////////////
const names =['karol', 'maciej']
for (const key in names) {
    console.log(key);    
    console.log(names);    
    }

const employee = {
    boss: 'Michael',
    secretary: 'Pam'
}
console.log(employee[1]);
console.log(names[1]);
const descriptor = Object.getOwnPropertyDescriptor(employee, 'boss')
console.log(descriptor);
Object.defineProperty(employee, 'acc', {
    value: 'Kevin', enumerable: true
})
console.log(employee);
const descriptor2 = Object.getOwnPropertyDescriptor(employee, 'acc')
console.log(descriptor2);

console.log(employee[Object.keys(employee)[0]])