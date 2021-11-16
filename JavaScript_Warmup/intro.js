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


// Let - stricter version of var. Allows for block scoping. Can be modified but not redeclared.

let letGreeting = "Let Hello be said!"
console.log(letGreeting)
// let letGreeting = 7 this does not work since we cannot redeclare it. 
// console.log(letGreeting)
letGreeting = "Let Hello be said, twice!" // but it can be modified.
console.log(letGreeting)


// Const - greatest of all variable. It doesn't allow for any change. 

const constGreeting = "This is a constant never ending greeting!"
console.log(constGreeting)
// const constGreeting = "This is a constant never ending greeting! That will not work"
// console.log(constGreeting)
// constGreeting = "This is a constant never ending greeting! Same here"
// console.log(constGreeting)


//Functions - no different than variables. They can be named or anonymous. 

function addition (a,b){ console.log(a+b)}
addition(1,1)
//(a,b) => console.log(a+b);
const adder = (a,b) => a+b //returns automaticall.
// adder(2,2) // variables can be used as functions
const subtractor = (a,b) => a-b

function subtractorAdder (add, minus, baseNo, subNo, addNo)
{
    return add(addNo, minus(baseNo, subNo)) //using variables as functions allows us to make really complicated functions such as here. 
}

const baseNo = 100 //referential transparency would mean that this is allowed to be entered into the function directly. 
const subNo = 50
const addNo = 25
console.log(subtractorAdder(adder, subtractor, baseNo, subNo, addNo)) //  notice we have to print since are using return.
