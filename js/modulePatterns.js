var counter = (function(){
     // private stuff
     let count = 1;

     function print(message){
        console.log(message + '---' + count);
     }

     // return an object with full of properties
     return{
        value: count,
        increment: function(){
            count += 1;
            print('After Increment');
        },
        reset: function(){
         print('Before reset:');
         count = 0;
         print('After reset');
        }
     }

})(); //IIEF Immediately Invoke Function Expression

console.log(counter.count);
console.log(counter.value);
console.log(counter.increment());
// GLOBAL NAMESPACE why we dont want to define a variable in the Global namespace.

// 1. It is not remove from the computer memory until we navigate to a new tab. 2 . Web Browser.