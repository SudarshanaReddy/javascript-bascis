const numbers = arrayFromRange(-10,4);

console.log(numbers);

function arrayFromRange(min, max) {
    const items = [];
    while(min <= max) {
        items.push(min);
        min++;
    }
    return items;
 }
