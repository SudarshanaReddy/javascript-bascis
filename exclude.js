const numbers = [1,2,3,4,5];

const output = except(numbers, [1,2]);

console.log(output);

function except(array, exclude) {
    const output = [];
    for(let number of array) {
        if(!exclude.includes(number))
          output.push(number);
    }
    return output;
}