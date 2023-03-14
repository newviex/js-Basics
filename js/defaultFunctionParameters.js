// // function greetings(message = 'hi!') // parameter
// // {
// //     console.log(message);
// // }
// // greetings();

// // //Parameters vs. Arguments

// // greetings('Hello!');// arguments

// /**================================================= */
 
// function add(x,y)// parameter
//  {
//     return(x+y);
//  }
//  console.log(add(10,10)); // arguments

//  /**================================================= */

//  function say(message){
//     message = typeof message !== 'undefined' ? message : 'hi!';
//     console.log(message);
//  }
//  say();

  /**================================================= */

// function multiply(a,b){
//     return a *b;
// }
// console.log(multiply(10,10));
// console.log(multiply(10));//Nan - not a number

  /**================================================= */

  function multiply(a,b){
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
console.log(multiply(5,5));
console.log(multiply(5));//Nan - not a number