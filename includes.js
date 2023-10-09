const numbers = [1,2,3,4,5];

console.log(includes(numbers,4));

function includes(numbersArray, element) {
    for(let number of numbersArray) {
        if(number === element)
          return true;
    }
    return false;
} 