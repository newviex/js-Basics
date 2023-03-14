// closure will be associating some data with a function

function sayHello(name) {
    return function(){
        console.log('Howdy ' + name + '!');
    }
}

let alds = sayHello('Alds');



let Aldrien = sayHello('Aldrien');
let Santiago = sayHello('Santiago');
let Allanigue = sayHello('Allanigue');

alds();
Aldrien();
Santiago();
Allanigue();
