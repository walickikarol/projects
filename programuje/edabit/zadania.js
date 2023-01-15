// Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
// Examples
// printArray(1) ➞ [1]
// printArray(3) ➞ [1, 2, 3]
// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
const arg = process.argv.splice(2);
console.log (arg)
function printArray(number) {
    var newArray = [];
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
    return newArray;
  }
  //console.log(printArray(12))

  //const printArray2 = n => new Array(n).fill('').map((el, i) => i + 1)
  const printArray2 = n => Array.from({length: n}, (_, i) => i + 1)
  console.log(printArray2(arg))

  ////////////////////////////////////////////////////////////////////////////////////
//   Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples
function arrayValuesTypes(arr) {
	let newArray = [];
	for(let i = 0; i<arr.length; i++){
		newArray.push(typeof arr[i]);
	}
	return newArray;
}
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))

let arrayValuesTypes2 = a => a.map(b => typeof b);
console.log(arrayValuesTypes2(["214", true, false, 2, 2.15, [], null]))

let arrayValuesTypes3 = a => a.map(b =>b+1);
console.log(arrayValuesTypes3(["214", true, false, 2, 2.15, [], null]))

////////////////////////////////////////////////////////////////////////////////////
// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.
let findIndex=(a,s)=>a.indexOf(s)
console.log(findIndex(["Red", "blue", "Blue", "Green"], "Green"))

////////////////////////////////////////////////////////////////////////////////////
// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.
function search(arr, item) {
	return arr.indexOf(item)
}
console.log(search([9, 8, 3], 8))

////////////////////////////////////////////////////////////////////////////////////
// Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:
// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1
// word("two") ➞ 2
// word("nine") ➞ 9
// Notes
// All numbers will be single digit positive integers.

const word = s => `zero,one,two,three,four,five,six,seven,eight,nine`.split`,`.indexOf(s);

 console.log(word("two"))

 ////////////////////////////////////////////////////////////////////////////////////
//  Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
// Notes
// N/A
function length(s) {
	let stringLength = 0;
	for (let x of s){
		stringLength +=1;
	}
	return stringLength;
}
console.log(length("wash youasdfr hands!"))

let length2=(s)=>s.lastIndexOf('');
console.log(length2("wash youasdfr hands!"))
////////////////////////////////////////////////////////////////////////////////////
// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.
let getFirstValue = arr =>arr[0]
console.log(getFirstValue([80, 5, 100]))

////////////////////////////////////////////////////////////////////////////////////
// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
let remainder = (a,b)=>a%b
console.log(remainder(5, 5))

////////////////////////////////////////////////////////////////////////////////////
// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
// Notes
// Don't forget to return the result.
// If you're stuck, find help in the Resources tab.
// If you're really stuck, find solutions in the Solutions tab.
let findPerimeter = (a,b)=>2*a+2*b
console.log(findPerimeter(20, 10))

////////////////////////////////////////////////////////////////////////////////////
// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.
let giveMeSomething=a=>`something ${a}`
console.log(giveMeSomething("is better than nothing"))
////////////////////////////////////////////////////////////////////////////////////
// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
const lessThanOrEqualToZero=a=>a<=0
console.log(lessThanOrEqualToZero(-2))

function lessThanOrEqualToZero2(num) {
    return num <= 0 ? true : false;
  }
////////////////////////////////////////////////////////////////////////////////////
//   Sum of Polygon Angles
//   Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
  
//   Examples
//   sumPolygon(3) ➞ 180
  
//   sumPolygon(4) ➞ 360
  
//   sumPolygon(6) ➞ 720
//   Notes
//   n will always be greater than 2.
//   The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
function sumPolygon(n) {
    return (n-2)*180
}
console.log(sumPolygon(6))
let s=n=>(n-2)*180
console.log(s(4))
////////////////////////////////////////////////////////////////////////////////////
// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100
let points=(a,b)=>2*a+3*b
console.log(points(7,5))
////////////////////////////////////////////////////////////////////////////////////
// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"
let nameString=a=>`${a}Edabit`
console.log(nameString('karol'))
////////////////////////////////////////////////////////////////////////////////////
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

let lessThan100=(a,b)=>{if (a+b<100) {
  return true 
}else return false}
console.log(lessThan100(1,99))
//const lessThan100 = (a, b) => (a + b) < 100
// function lessThan100(a, b) {
// 	return a+b<100 ? true : false;
// }
////////////////////////////////////////////////////////////////////////////////////
// Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?
// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
// Examples
// swap(100, 200) ➞ [200, 100]
// swap(44, 33) ➞ [33, 44]
// swap(21, 12) ➞ [12, 21]

function swap(a, b) {
	// b = a
	// a = b
  let c=a
  a=b
  b=c
	return [a, b]
}
console.log(swap(100, 200))

function swap2(a, b){
	return [b, a]
}
console.log(swap2(101, 201))
////////////////////////////////////////////////////////////////////////////////////
// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// Examples
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50
// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.
function animals(chickens, cows, pigs) {
	return chickens*2+cows*4+pigs*4
}
console.log(animals(2,3,5))
////////////////////////////////////////////////////////////////////////////////////
// Using the "&&" Operator
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// Consider a && b:
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
// Make a function using the && operator.
// Examples
// and(true, false) ➞ false
// and(true, true) ➞ true
// and(false, true) ➞ false
// and(false, false) ➞ false
function and(a, b) {
	if (a==true && b==true) {
    return true
  } else return false
}
console.log(and(true, true))

let and2=(a,b)=>a&&b
console.log(and2(false, true))
////////////////////////////////////////////////////////////////////////////////////
// Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
function isSameNum(num1, num2) {
	return num1===num2
}
console.log(isSameNum(4, 8))
//second
const isSameNum2 = Object.is;
console.log(isSameNum2(2, "2"))
////////////////////////////////////////////////////////////////////////////////////
// Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
// Examples
// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0
function convert(hours, minutes) {
	return hours*3600+minutes*60
}
console.log(convert(1, 3))
////////////////////////////////////////////////////////////////////////////////////
// Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.
// Examples
// boolToString(true) ➞ "true"
// boolToString(false) ➞ "false"
const boolToString=(flag)=>flag.toString()
console.log(boolToString(false))
//second
function boolToString2(flag){
	return `${flag}`;
}
console.log(boolToString2(true))
//return String(flag)
//return flag+''
////////////////////////////////////////////////////////////////////////////////////
// Using Arrow Functions
// Create a function that returns the given argument, but by using an arrow function.
// An arrow function is constructed like so:
// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3
// arrowFunc("3") ➞ "3"
// arrowFunc(true) ➞ true
// create your arrow function below
let arrowFunc=a=>a
console.log(arrowFunc(3))
//arrowFunc = _ => _
////////////////////////////////////////////////////////////////////////////////////
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
//FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
function frames(minutes, fps) {
	return minutes*fps*60
}
console.log(frames(10, 25))
////////////////////////////////////////////////////////////////////////////////////
// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11
function calculator(str) {
	return eval(str);
}
console.log(calculator("49/7*2-3"))

////////////////////////////////////////////////////////////////////////////////////
// Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// Examples
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true
function makesTen(a, b) {
	if (a==10 || b==10 || a+b==10)
  {return true} else {return false}
}
console.log(makesTen(9,1))
//const makesTen = (a , b) => [a , b , a + b].includes(10);
//let makesTen = (a,b)=> a + b == 10 ||a == 10 || b == 10;

////////////////////////////////////////////////////////////////////////////////////
// Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
// Examples
// calculateFuel(15) ➞ 150
// calculateFuel(23.5) ➞ 235
// calculateFuel(3) ➞ 100
// Notes
// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.
function calculateFuel(n) {
  let fuel=0
	if (n<10) {fuel=100
    
  } else fuel=10*n
  return fuel
}
console.log(calculateFuel(3))
//calculateFuel=n=>n<10?100:n*10
//const calculateFuel = n => Math.max(100, n * 10);

////////////////////////////////////////////////////////////////////////////////////
// Pair Management
// Given two arguments, return an array which contains these two arguments.
// Examples
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
	return [num1,num2]
}
console.log(makePair(51, 21))

//return [...arguments]

let makePair2=(...z)=>z
console.log(makePair2(51, 21))
////////////////////////////////////////////////////////////////////////////////////
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false
function comp(str1, str2) {
	return str1.length==str2.length
}
console.log(comp("ABC", "DE"))

////////////////////////////////////////////////////////////////////////////////////
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.
// Examples
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false
function isEmpty(s) {
	return s.length == 0;
}
console.log(isEmpty(""))
//return (s.length > 0 ? false : true)
//const isEmpty = s => s==""?true:false;

////////////////////////////////////////////////////////////////////////////////////
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(n) {
	return n%5==0 ? true:false  
}
console.log(divisibleByFive(5))
//const divisibleByFive = (n) => !(n%5)

////////////////////////////////////////////////////////////////////////////////////
// Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// Examples
// divisible(1) ➞ false
// divisible(1000) ➞ true
// divisible(100) ➞ true
function divisible(num) {
	return !(num%100)
}
console.log(divisible(1000), 'podzielna')

////////////////////////////////////////////////////////////////////////////////////
// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.
// Examples
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0
const length3 = str => str == '' ? 0 : length3(str.substring(1)) + 1;

//const length = str => str == '' ? 0 : length(str.substring(1)) + 1;
//const length = str => !str ? 0 : 1 + length(str.slice(1));
console.log(length3('apple'))
function length4(str) {
	if (str=='') {
		return 0
	}
  console.log(str)
	return length4(str.slice(0, -1))+1
}
console.log(length4("make"))
let a = 'apple'
let b=a.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)
b=b.slice(0, -1)
console.log(b)

function sum(n) {
  if (n <= 1) {
    return n;
  }
  console.log(n)
  return n + sum(n - 1);
}
console.log(sum(10))

////////////////////////////////////////////////////////////////////////////////////
// Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
// Examples
// dividesEvenly(98, 7) ➞ true
// // 98/7 = 14
// dividesEvenly(85, 4) ➞ false
// // 85/4 = 21.25
// Notes
// a will always be greater than or equal to b.
function dividesEvenly(a, b) {
	let de = !(a%b)
  let re = a/b
  return de.toString()+' '+re
}
console.log(dividesEvenly(85,4))
//dividesEvenly=(a,b)=>a/b==Math.floor(a/b)

////////////////////////////////////////////////////////////////////////////////////
// Return a String as an Integer
// Create a function that takes a string and returns it as an integer.
// Examples
// stringInt("6") ➞ 6
// stringInt("1000") ➞ 1000
// stringInt("12") ➞ 12
// Notes
// All numbers will be whole.
// All numbers will be positive.
function stringInt(str) {
	//return typeof str+parseInt(str)+typeof str
  return parseInt(str)
}
//let  stringInt = str => Number(str);

console.log(typeof stringInt("6")+' '+stringInt("6"))

////////////////////////////////////////////////////////////////////////////////////
// Area of a Rectangle
// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

// Examples
// area(3, 4) ➞ 12

// area(10, 11) ➞ 110

// area(-1, 5) ➞ -1

// area(0, 2) ➞ -1
function area(h, w) {
	if (h<=0||w<=0) {
    return -1
  } return h*w
}
console.log(area(-1, 5))
//const area = (h, w) => h > 0 && w > 0 ? h * w : -1;
////////////////////////////////////////////////////////////////////////////////////
// Minimal I: If Boolean Then Boolean
// Write a function that returns true if the given integer is even, and false if it's odd.
function isEven(n) {
	if (n % 2 === 0) {
		return true
	}
	else if (n % 2 === 1) {
		return false
	}
}
let isEven2=n=>n%2===0
console.log(isEven(16))
console.log(isEven2(16))
//isEven = n => !(n % 2)

////////////////////////////////////////////////////////////////////////////////////
// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// concatName("First", "Last") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"
function concatName(firstName, lastName) {
	//return `${lastName}, ${firstName}`
  //concatName = (a, b) => `${b}, ${a}`
  return lastName.concat(', ',firstName)
}
console.log(concatName("First", "Last"))

////////////////////////////////////////////////////////////////////////////////////
// Evaluate an Equation
// Create a function that evaluates an equation.
// Examples
// eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1
function eq(evaluate) {
	return eval(evaluate)
}console.log(eq("6/(9-7)"))

////////////////////////////////////////////////////////////////////////////////////
// Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.
// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
// drop([1, 2, 3], 2) ➞ [3]
// drop([1, 2, 3], 5) ➞ []
// drop([1, 2, 3], 0) ➞ [1, 2, 3]
function drop(arr, val = 1) {
	return arr.slice(val)
}
console.log(drop([1, 2, 3], 0))
//return arr.filter((z, index) => index >= val);

////////////////////////////////////////////////////////////////////////////////////
// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
	let up = votes.upvotes
  let down = votes.downvotes
  return up-down
}

console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))
//let votess = parseInt(votes.upvotes)-parseInt( votes.downvotes)

////////////////////////////////////////////////////////////////////////////////////
// Return Negative
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
// Examples
// returnNegative(4) ➞ -4
// returnNegative(15) ➞ -15
// returnNegative(-4) ➞ -4
// returnNegative(0) ➞ 0
function returnNegative(n) {
	return -n
}
console.log(returnNegative(0))
//return -Math.abs(n)
//return Math.min(n,-n)
//return n<0?n:n*-1

////////////////////////////////////////////////////////////////////////////////////
// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
function reverse(arr) {
	return arr.reverse()
}
console.log(reverse([]))

//for(letter of arr){
//   word.unshift(letter)
// }
//arr.forEach(item => new_array.unshift(item));

////////////////////////////////////////////////////////////////////////////////////
// Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
// Examples
// acceptIntoMovie(14, true) ➞ true
// acceptIntoMovie(14, false) ➞ false
// acceptIntoMovie(16, false) ➞ true
function acceptIntoMovie(age, isSupervised) {
	return age>=15 || isSupervised? true:false
  
}

console.log(acceptIntoMovie(14, true))


function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++
  }
  return arr
}
//const incrementItems = arr => arr.map(n => n + 1);

////////////////////////////////////////////////////////////////////////////////////
// Radians to Degrees
// Create a function that takes an angle in radians and returns the corresponding angle in degrees.
// Examples
// radiansToDegrees(1) ➞ 57.29577951308232
// radiansToDegrees(20) ➞ 1145.9155902616465
// radiansToDegrees(50) ➞ 2864.7889756541163
function radiansToDegrees(rad) {
	return rad*57.29577951308232
}
console.log(radiansToDegrees(20))
//return  rad * 180 / Math.PI;
console.log(Math.PI)

////////////////////////////////////////////////////////////////////////////////////
// Drinks Allowed?
// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Examples
// shouldServeDrinks(17, true) ➞ false
// shouldServeDrinks(19, false) ➞ true
// shouldServeDrinks(30, true) ➞ false

function shouldServeDrinks(age, onBreak) {
	return age>=18&&!onBreak? true:false
}
console.log(shouldServeDrinks(17, true))

////////////////////////////////////////////////////////////////////////////////////
// Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.
// Examples
// futurePeople(256, 2) ➞ 976
// futurePeople(3248, 6) ➞ 5408
// futurePeople(5240, 3) ➞ 6320
function futurePeople(population, n) {
	return population+n*12*30
}
console.log(futurePeople(5240, 3))
//return  Math.ceil((30*12)*n)+p;	

////////////////////////////////////////////////////////////////////////////////////
// Format I: Template String
function format(a, b, c) {
	return `Their names were: ${a}, ${b} and ${c}.`
}
////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions
// add2=x=>x+2
// add3=x=>x+3
// add5=x=>x+5
// add7=x=>x+7
// add11=x=>x+11

 [2, 3, 5, 7, 11].forEach(n => global['add' + n] = (v) => n + v);
// [2, 3, 5, 7, 11].forEach(n => this[`add${n}`] = x => x + n);
// [2, 3, 5, 7, 11].map(n => eval(`add${n} = x => x + n`));