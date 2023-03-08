// function nameOfFunction () { 
    // here we have a function declaration and we have an identifier
// }



// setTimeout(() => {
    // YOU WOULD SEE HERE WE DONT HAVE A FUNCTION NMAE , in here we use an arrow function.
// }, timeout);



//lets try out creating a use case for out setTimeount function

setTimeout(function(){
console.log('Lets wait for 2 seconds')
},2000); // mag bilang kang 2 seconds para mag display ang lets wait for 2 seconds


// setTimeout(); // Remeber that this is a method or  a funtion written by js developer.



setTimeout(function(){
    console.log('Lets wait for 3 seconds')
},3000); // mag bilang kang 3 seconds

setTimeout(function() {console.log('Lets wait for 5 seconds')},5000);


/**  SET TIMEOUT FUNCTION IN A FUNCTION **/
function Timeout(){

setTimeout(function(){
    console.log('hi this is a function expression inside of a setTimeout function');
},6000);

}
Timeout();

// let counter = 0;
// function countMessage(){
//     setTimeout(function(){
//         console.log('Hi! My name is Aldrien. Lets count ' + counter++);
//         countMessage();
//     },8000);

// }
// countMessage();


/** EXAMPLE OF AN IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) **/


(function(){ 
    // PRIORITIZE NIYANG IPRPRINT OR GAGAMITIN
console.log('EXAMPLE OF AN IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)');

})();
