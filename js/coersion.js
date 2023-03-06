let a = 8; // a number 
let b ='6'; // a string
b  = parseInt (b ,10);
let c = a + b ;


console.log('Answer: ' +  c); // coersion - it will display 86

let d = parseInt('Rod', 10);
console.log(d); // This should produce the NaN not a number

let e = isNaN(d);
console.log(e); 
