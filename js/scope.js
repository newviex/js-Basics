// let x=1;

// while(x<10){
//     console.log(x++);
//     if(x == 7)break;
// }

//VARIABLES SCOPE & FUNCTION SCOPE


// let a = 'first example of scope'; // declaring and inializing a varibale outsit of a function.

// function scopeTest()
// { // function scope
//     console.log(a); 
//     let b = 'second example of scope inside of a code block';

// }
// scopeTest();
// console.log(b);

/** =============================================== */

// let a = 'first example of scope outside of a codeblock'; // declaring and inializing a varibale outsit of a function.

// function scopeTest(){ // function scope

//     console.log(a); 
//     if(a != ''){
//         console.log(a);
//     }
// }
// scopeTest();

/** =============================================== */

// let a = 'first example of scope outside of a codeblock'; // declaring and inializing a varibale outsit of a function.

// function scopeTest(){ // function scope

//     console.log(a); 
    
//     if(a != '') { // code block scope
//         console.log(a);
//         let c = 'third example of scope inside of a function scope and an if statement code block';
//     }
//     console.log(c);
// }
// scopeTest();

/** =============================================== */

// let a = 'first example of scope outside of a codeblock'; // declaring and inializing a varibale outsit of a function.
// function scopeTest(){ // function scope
//     console.log(a); //first value
//     a = 'change the value of the variable a outside of the function scope';
//     if(a != '') { // if condition code block scope
//         console.log(a); // we changed value to second here
//         let c = 'third example of scope inside of a function scope and an if statement code block';
//     }
// }
// scopeTest();
// console.log(a); // third value that we are seeing on the console

/** =============================================== */

let a = 'first example of scope outside of a codeblock'; // declaring and inializing a varibale outsit of a function.
function scopeTest(){ // function scope
    console.log(a); //first value
    a = 'second example changed the value of the variable a outside of the function scope';
    let b = 'third example second variable inside of the function scope';
    if(a != '') { // if condition code block scope
        console.log(a); // we changed value to second here
        console.log('inside if:'+ b )
        let c = 'third example of scope inside of a function scope and an if statement code block';
    }
}
scopeTest();

console.log(a); // third value that we are seeing on the console