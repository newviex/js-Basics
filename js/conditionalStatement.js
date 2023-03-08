//IF STATEMENT - if a condition is true
// var count = 3;

// if(count == 4){
//     console.log('count is equal to 4');
// }
// *********************************************************************//

//IF ELSE STATEMENT - if the same condition is false
// var count = 3;

// if(count == 4){
//     console.log('count is equal to 4'); // if true
// }else{
//     console.log('count is not equal to 4'); // if false
// }
// *********************************************************************//


//ELSE IF STATEMENT - if the first condition is false
// var count = 4;

// if(count !== 4){
//     console.log('count is equal to 4');
// }else if (count > 4){
//     console.log('count is greather that to 4'); 
// }else if( count < 4){
//     console.log('count is less that to 4');
// }else {
//     console.log('count is not equal to 4');
// }
// *********************************************************************//

// SWITCH STATEMENT

    // let hero = 'Superman';
    
    // switch (hero) {
    //     case 'Superman':
    //         console.log('super vision');
    //         console.log('x-ray vision');
    //         break;
    //     case 'Batman':
    //         console.log('Money nad intelligence');
    //         console.log('Martial arts skills');
    //         break;
    //     case 'Aquaman':
    //         console.log('Can breath under water');
    //         console.log('Can communicate with the fishes');
    //         break;
    //     default:
    //         console.log('Member of the JLA')
    //         break;
    // } 


    // let hero = 'Superman'; // js is case sensitive
    
    // switch (hero.toLowerCase()) { // use toLowerCase to detect
    //     case 'superman':
    //         console.log('super vision');
    //         console.log('x-ray vision');
    //         break;
    //     case 'Batman':
    //         console.log('Money nad intelligence');
    //         console.log('Martial arts skills');
    //         break;
    //     case 'Aquaman':
    //         console.log('Can breath under water');
    //         console.log('Can communicate with the fishes');
    //         break;
    //     default:
    //         console.log('Member of the JLA')
    //         break;
    // } 
    // console.log(typeof hero);

    // *********************************************************************//

    //JS DATE OBJECTS

    // let date = new Date();
    // console.log(date);


//  WE GET THE DATE TODAY AND HOUR(MILITARY)
    // let day = new Date();

    // let today = day.getDay();
    // let hours = day.getHours();

    // switch (today) {
    //     case 0:
    //         day = 'Sunday'
    //         break;
    //     case 1:
    //         day = 'Monday'
    //         break;
    //     case 2:
    //         day = 'Tuesday'
    //         break;
    //     case 3:
    //         console.log(day = 'Wednesday');
    //         console.log(hours);
    //         break;
    //     case 4:
    //         day = 'Thursday'
    //         break;
    //     case 5:
    //         day = 'Friday'
    //         break;
    //     case 6:
    //         day = 'Saturday'
    //         break;
    // }

// *********************************************************************//
// let heroLowerCase = 'thor';
// let heroUpperCase = 'THOR';

// switch (heroLowerCase || heroUpperCase ) {
//     case 'hulk':
//         console.log('Super Strength');
//         console.log('Super Strength1');
//         break;
//     case 'sangchi':
//         console.log('Super Strength2');
//         console.log('Super Strength3');
//         break;
//     case 'thor':
//         console.log('Super Strength3');
//         console.log('Super Strength5');
//         console.log(heroLowerCase);
//         break;
//     case 'THOR':
//         console.log('Super Strength3');
//         console.log('Super Strength5');
//         console.log(heroUpperCase);
//         break;
//     case 'thor' && 'THOR':
//         console.log('Super Strength3');
//         console.log('Super Strength5');
//         console.log(heroUpperCase);
//         console.log(heroLowerCase);
//         break;
//     case (false):
//         console.log('Super Strength6');
//         console.log('Super Strength7');
//         console.log(hero);
//         break;
//     default:
//         console.log('member of the marvel universe');
// }
// *********************************************************************//

// TERNARY OPERATOR ?
let a = 1, b = '1';
let result = (a === b) ? 'equal' : 'inequal'; // STRICT always use 3 =

console.log(result);

