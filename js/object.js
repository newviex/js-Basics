// types of array

// let array = [2023,'bmw','745li'];
// let car0 = {year: 2023,make:'toyota',model:'745li'};


// OBJECT LITERAL SYNTAX
let car1 = {
    make : 'bmw',
    model: ' 745li',
    year: 2023,

    //key & a value
    getPrice:function(){
        return 5000;
    },
    printDescription:function(){
        console.log(this.make + this.model);
    }
}

// console.log(typeof array);
// console.log(array);

// car1.printDescription();
// console.log(car1.year);
// console.log(car1.getPrice());

// console.log(car1['getPrice']);
// console.log(car1[1]);

/********************************************************************/

// var car2 = {};

// car2.whatever = 'rod';

// console.log(car2.whatever);

// var a ={
//     myProperty: {b: 'hi'}
// };
// console.log(a.myProperty.b);

/********************************************************************/

// var car3 = {
//     myProperty:[
//         {d: 'this'},
//         {e: 'can'},
//         {f: 'be really'},
//         {g: 'confusing'}
//     ]
// }
// console.log(car3.myProperty[0]);
// console.log(car3.myProperty[1]);
// console.log(car3.myProperty[2]);
// console.log(car3.myProperty[3]);

/********************************************************************/

// let carParking = [
//     {year:2021, make: 'BMW', model: '528i'},
//     {year:2019, make: 'Toyota', model: '4runner'},
//     {year:1982, make: 'Buick', model: 'Skylark'}
// ]
// console.log(carParking[0]);
// console.log(carParking[1]);
// console.log(carParking[2]);

/********************************************************************/

let contact = {
    customer: [
        {firstName:'Aldrien', lastName: 'Allanigue', phoneNumber:['0909090909090', '(123) 123-123123']},
        {firstName:'Aldrienzzz', lastName: 'Allaniguezzz', phoneNumber:['11111', '(1232) 12223-123123']}
    ],
    employees:[
        {firstName:'ben',lastName:'&ben',phoneNumber:['11111', '(1232) 12223-123123']},
        {firstName:'ben1',lastName:'&ben3',phoneNumber:['11111', '(1232) 12223-123123']},
        {firstName:'ben2',lastName:'&ben4',phoneNumber:['11111', '(1232) 12223-123123']}
    ]
}

console.log(contact.customer[0]);