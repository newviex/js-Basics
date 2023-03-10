var counter = (function(){
     // private stuff
     let count = 0;

     function print(message){
        console.log(message + '---' + count);
     }

     // return an object with full of properties
     return{
      //   value: count,
         get: function(){return count;},
         set: function(value){ count = value;},
        increment: function(){
            count = count += 1;
            print('After Increment');
        },
        reset: function(){
         print('Before reset:');
         count = 0;
         print('After reset');
        }
     }

})(); //IIEF Immediately Invoke Function Expression

// console.log(counter.count);
// console.log(counter.value);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset()); // it reset to zero
// console.log(counter.increment());
// console.log(counter.value); // we accidentally created a closure lets not do this

counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.set(7);
console.log(counter.get());
counter.reset();


// GLOBAL NAMESPACE why we dont want to define a variable in the Global namespace.

// 1. It is not remove from the computer memory until we navigate to a new tab. 2 . Web Browser.