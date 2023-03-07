// let name = 'My name is ' +'aldrien'; // string 
let names = ['Aldrien', 'Aldrien2' , 'Aldrien3']; // array of names
let others = ['Allanigue','Allanigue2','Allanigue3'];

let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];


 var combine = lost.concat(fibonacci);

// console.log(typeof fibonacci.join('~'));

// console.log(typeof fibonacci);

// console.log(lost.shift());
// console.log(lost);

// lost.unshift(1,2,3,4);
// console.log(lost);

// console.log(names);
// console.log(names.reverse());

// console.log(names.sort());

// console.log(others.indexOf('Allanigue3'));

// console.log(combine);
// console.log(combine.lastIndexOf(4)); // bibilangin kung pang ilan sia


///////////////////////////////FILTER() METHOD //////////////////////////////////
// > greather than
// < less than
// == equal
// != not equal

// finifilter kung sino ang less than or equal sa sinet na data
// var filtered = combine.filter((x) => {if (x <=5) return x;}); 
// console.log(filtered);

// filtering strings
// var filtered = names.filter((x) => {if (x == 'Aldrien')return x;} ); 
// console.log(filtered);

// hindi nia ididisplay yung kaequal niyang data/variable
// var filtered = names.filter((x)=> {if ( x != 'Aldrien')return x;}); 
// console.log(filtered);


/////////FOREACH METHOD
 
var filtered = combine.filter((x) => {if (x <=80) return x;}); 
names.forEach((name)=>console.log(`howdy ${name}`));

// display true of false CHECK ALWAYS THE VARIABLE
// console.log(filtered.every((num)=> num<10)); 

console.log(fibonacci.some((num) => num > 50));
console.log(fibonacci.some((num) => num > 100));