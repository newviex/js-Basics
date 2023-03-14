// // templates
// // EXAMPLE 1
// let firstName = 'Alds';

// console.log(`Hi ${firstName}`);

// // EXAMPLE 2
// let sentence = `This is really convenienent.
// You probably will never want  to do something quite like this.
// You might choose to put long passages of text into an external
// file and load it somehow.`;

// console.log(sentence);

// // EXAMPLE 3
// let sentence2 = `This is really convenienent.
//             You probably will never want  to do something quite like this.
//         You might choose to put long passages of text into an external
//     file and load it somehow.`

// console.log(sentence2); // get the indention

// EXAMPLE 4
function getReasonCount() {return 1;}

let interpolation =  `Give me ${(getReasonCount()==1) ? 'one good reasons' : 'a few reasons'} to try this`;
console.log(interpolation);
