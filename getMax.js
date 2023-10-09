const numbers = [1,2,7,4,5];

const max = getMax(numbers);

console.log(max);

function getMax(numbers) {
    if(numbers.length === 0) 
      return;
    return numbers.reduce((a,c) => {
      //a =  a > c ? a : c;
      return a;
    },numbers[0])
}