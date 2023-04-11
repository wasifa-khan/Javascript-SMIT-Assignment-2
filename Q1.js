function Closure(addNumber) {
    return function(numb) {
      return numb + addNumber;
      
    };
  }

let add_FiveNum = Closure(5);
let result = add_FiveNum(10); 
console.log(result);

