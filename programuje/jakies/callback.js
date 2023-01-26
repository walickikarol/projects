function logA(callback) {
        setTimeout(()=>{
        const a='this is from a'
        callback(a)
    },1000)
}
function logB(param) {
    console.log(param+'kk');
    console.log("asdf");
}
logA(logB)

// function mainFunction(callback) {
//     console.log("Rozpoczęcie działania głównej funkcji");
//     setTimeout(function(){
//       console.log("Zakończenie działania głównej funkcji");
//       callback(' karol');
//     }, 500);
//   }
  
//   function callbackFunction(stringToUse) {
//     console.log("Rozpoczęcie działania funkcji callback"+stringToUse);
    
// }
  
//   mainFunction(callbackFunction);


  function mainFunction(callback) {
    console.log("Rozpoczęcie działania głównej funkcji");
  
    setTimeout(function(){
      console.log("Zakończenie pierwszego etapu działania głównej funkcji");
      callback(callback2Function);
    }, 1000);
  }
  
  function callback1Function(callback2) {
    console.log("Rozpoczęcie działania pierwszej funkcji callback");
    setTimeout(function(){
      console.log("Zakończenie drugiego etapu działania pierwszej funkcji callback");
      callback2(' karol');
    }, 2000);
  }
  
  function callback2Function(a) {
    console.log("Rozpoczęcie działania drugiej funkcji callback"+a);
  }
  
  mainFunction(callback1Function);