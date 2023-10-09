const numbers = [1,2,3,4,5];

const output = move(numbers,0,-1);

console.log(output);

function move(numberArray, index, offset) {
    const temp = [...numberArray]; 
    if((index + offset) > numberArray.length-1 || 
        (index + offset) < 0) {
            console.log('invalid offset');
            return;
    }

    temp[index+offset] = numberArray[index];
    temp[index] = numberArray[index+offset];

    return temp;
}