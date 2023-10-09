## Arrays

. datastrusture used to represent the list of items.

let names = ['sudarshan', 'sathosh', 30];

. An array can contain different datatype of elements.



## Adding elements

      const items = [1,2,3];

      items.push(4,5); //add elements to end
      items.unshift(3,4); // add elements to begining
      items.splice(2,0,'a','b') //add elemets in the middle of array.

## Finding elements - primitive types

    const items = [1,2,3,4,5];

    console.log(items.indexof(1)); // returns index of the element.
    console.log(items.includes(1)); // returns boolean

## Finding elements - reference types

    const courses = [ 
        {id :1, name : 'a'},
        {id :2, name : 'b'},
        {id :3, name : 'c'},
    ]

    //returns object 
    const course = courses.find(function(course) {
        return course.name == 'a';
    })

    //returns index
    const courseIndex = courses.findIndex(function(course) {
        return course.name == 'a';
    })

## Arrow Functions

    const courses = [ 
        {id :1, name : 'a'},
        {id :2, name : 'b'},
        {id :3, name : 'c'},
    ]
 
    courses.find((course) => {
        return course.name == 'a';
    })

    //shorter version of above
    courses.find(course => course.name == 'a');

## Removing Elements

    const numbers = [1,2,3,4];

    numbers.pop(); //removes last elemet of array
    numbers.shift(); //removes begining of array
    numbers.splice(2,1); // removes elements from specififed index of array

## Emptying an array

    const numbers = [1,2,3,4];
    
    //solution 1
    numbers.length = 0;
    //solution 2
    numbers.splice(0, numbers.length);
    //solution 3
    while(numbers.length > 0) {
        numbers.pop();
    }

## Combining ad Slicing an array

    const first = [1,2,3];
    const second = [4,5,6];

    const combined = first.append(second);   // 1,2,3,4,5,6

    const sliceArray = combined.slice(2,3);  // get the array from start index to end index.

## Spread Operator

    const first = [1,2,3];
    const second = [4,5,6];

    const combined = [...first, ...second]; // 1,2,3,4,5,6

## Iterating arrays

    const numbers = [1,2,3];
    
    for(let number of numbers) {
        console.log(number);
    }

    numbers.forEach(function(number) =>  {
        console.log(number);
    })

    numbers.forEach(number => console.log(number));

    numbers.forEach((number, index) => {
        console.log(index, number);
    });

## Joining Arrays

* This is used mainly when forming urls.

    ```
     const numbers = [1, 2, 3];

     const joined = numbers.join(','); // "1,2,3"
    ```

## Sorting Arrays

    const numbers = [1,2,3];

    numbers.sort(); // primitive types sort

    const courses = [ 
        {id : 1, name: 'JavaScript'};
        {id : 2, name: 'Node'};
    ]

    //sort the objects
    courses.sort(function(course1, course2) {

        if(course1.name > course2.name)
           return 1;
        if(course1.name < course2.name) 
           return -1;
        else
           return 0;       
    });

## Testing elemennts of an array

    const numbers = [1,2,3];

    //every method runs for all elemets of the array and exits as soon as the condition is not met.
    const allPositive = numbers.every(function(number) {
        return number > 0;
    })

    const atLeastOnePositive = numbers.some(function(number) {
        return number > 0;
    })
   
## Filtering an array

    const numbers = [1,2,3,-1];
    const filtered = numbers.filter(val => val >=0 ); //return the array with elements matchig the criteria.

 ## Mapping Arrays

    const numbers = [1,2,3,4,5,-1,-2];

    const items = numbers
      .filter(val => val >=0) 
      .map(obj => ({value : obj}))
      .filter(obj1 => obj1.value >=2)

## Reducing Array

* Reduce method helps in reducing the array to a single value, in the example below it is sum.


    ```
    const numbers = [1,-2,2,1,3];

    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    console.log(sum);
    ```
    



