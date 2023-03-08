// console.log()

// method.log()
// console.smile()

// function smile(){
     // Start with ...
     // Condition
     // End with . . .
// }

/////////////////////////// FUNCTION DECLARATION  /////////////////////////

// function sayHello()
// {
//     var name; 
//     console.log('--------------');
//     console.log('Hello');
//     console.log('---             --');
//     console.log('--     ---');
//     console.log('-        ---');
// }
// sayHello();

// let a = sayHello;

// a();
// a();
// a();


// try to use this in website console
function sayHello2(name){
    console.log('--------------');
    // prompt("Enter your name here");
    console.log('Hello ' + name + '!');
}

sayHello2('Aldrien');
sayHello2('Aldrien1');
sayHello2('Aldrien2');



function calculateTax(amount){
    let result = amount * 0.825;
    return result;
}

let tax = calculateTax(500); // here ////////////////

console.log(tax);
