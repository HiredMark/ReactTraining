var globalGreeting = "Hello global variable!"; //Vars are always global and that can make them dangerous. 
function readGlobalVar(){
    if(true){
    var globalGreeting = "Say Hi Instead" // Can be redeclared.
    globalGreeting = "Say Yoyoooooooo" // locally modiifying a variable for the function but having the output just in the function.
    console.log(globalGreeting)
    }
}

console.log(globalGreeting)
readGlobalVar()

var varGreeting = "Here is Hello1 ! "
console.log(varGreeting)
var varGreeting = "Here is Hello2 ! "
console.log(varGreeting)
var varGreeting = "Here is Hello3 ! "
console.log(varGreeting) // not idempotent. 


function scopedVar(){
    if(true){
    var scopedHello = "this hello is linked to this function" 
    scopedHello = "Say Yoyoooooooo" 
    console.log(scopedHello)
    }
}
scopedVar()
// console.log(scopedHello) will not work