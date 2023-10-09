const numbers = [1, 2, 1, 4, 5];

const count = countOccurennces(numbers, 1);

console.log(count);

function countOccurennces(numberArray, value) {
    return numberArray.reduce((a, c) => {
        const occurence = (c === value) ? 1 : 0;
        return a + occurence;
    }, 0);
}