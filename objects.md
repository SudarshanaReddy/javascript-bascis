 ## Objects

Objects is the way to represent group of related variables into one.

let person = {

    name :  'sudarshan',
    age: 30.
}

. To access we can use dot notation, bracket notation and default choice is bracket notation.

console.log(person.name) //dot notation
console.log(person['name']) //bracket notation

## Factory Function

```
//Type1 : declaration
function createCircle(radius) {
  return {
    radius : radius,
    draw : function () {
        console.log('draw circle with radiuse'
        +radius);
    }
  }
}

const circle = createCircle(1);
```

```
//Type 2: Short declaration
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw circle');
        }
    }    
} 
const circle = createCircle(1);
```

## Costructor Functions
```
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw circle');
    }
    return this;
}

```

const circle = new Circle(1);

## Dynamic Nature of Objects 

* we can add, remove the properties and methods for an object that is declared already.

    ```
    const circle = {
        radius: 1
    }

    circle.color = 'red';
    circle.draw() = function () {
        console.log('draw circle');
    }

    delete circle.color;
    delete circle.draw;

    circle = {}; // This operation is not allowed.
    ```

## Costrutor Property

* Every object in javascript has a property named costructor which reperesents function used to create the object.

## Primitive vs Reference Types

* Primitives(String, Number, Boolean, Symbol, null, undefined) are copied by value 
* Reference Type ( Objects, functions, Arrays) are copied by reference.

## Enumarating/Iterating Objects

    const circle = { 
        radius: 1,
        draw() {
            console.log('draw method');
        }
    }
    

    for(let keys in circle) { //to get all the keys
        console.log(key, circle[key]);
    }

    for(let keys of Object.keys(circle)) { // to get the keys
        console.log(key, circle[key]);
    }

    for(let keys of Object.entries(circle)) { // key valuepairs
        console.log(key, circle[key]);
    }

    for('radius' in circle) {
        console.log('property exists');
    }


## Cloning the object

   ```
    const circle = {
        radius : 1,
        draw: fuction() {
            console.log('draw method');
        }
    }

    //maually cloning a object
    const another = {}; 
    for(let keys in circle) {
        another[key] = circle[key];
    }

    //use object.assign() 
    //it copies attributes to new object
    const another = Object.assign({}, circle);

    //use spread operator
    const another = { ...circle };

   ```

   ## Strings

   * primitive string - this was iternally string will be wrapped.
   ```
    const str = 'hello'
   ```

   ## String Object

   ```
   const str = new string('hello');
   ```

   ## Template Literals

   * We use back tick in order to declare the string. 
   * This is usefull when compiling the message for emails.
   * 

   ```
   const str = `This is the 
   first message`;

   const str = `This is 'first' message`;
   ```

   ## Date Object

   const now = new Date();
   

   








