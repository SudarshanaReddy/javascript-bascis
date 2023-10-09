## Function declaration vs Expressions

* Function declaration

 ```
  function walk() {
    console.log('walk');
  }
 ```

 * Function Expression

 ```
  let run = function() {
    console.log('move object');
  }

  run();
 ```

* Named Function expression

```
 let run = function move() {
    cosole.log('move');
 }
 run();
```

## Hoisting

* Hoisting is the process of moving function calls to the top of the file.
* Due to this we can a call function before it's declaration.

## Arguments
```
  function sum(a, b) {
    return a + b;
  } 

  let sum = sum(1,2);
  let sum1 = sum(1,2,3,4); //valid call but return NaN;
  let sum2 = sum() //valid call but return NaN;
```

* Arguments - every function has access to something named arguments when we want to work with variable number of arguments.

```
function sum(a, b) {
    for(let value of arguments) {
        let total = 0;
        for(let val of values) {
            total += val;
        }
        return total;
    }
  } 

```

## Rest Operator

* It is used to work with variable number of arguments passed to a function.
* This must be the last parameter in the function - otherwise we will get runtime error.

``` 
 function sum(principal, ...numbers) {

 }
```

## Default Parameters

* As best practice it is recommeded that after the deafult parameter we give all the parameters as default or make it as last parameter.

```
  function interestRate(principal, rate = 3.5, years = 2) {

  }

  interestRate(10000);

```

## Getters and Setters

* These are used to set and get the properties of a object.

 ```
   const person = {
    firstName: 'Sudarshana',
    lastName: 'Reddy',
    get fullName() {
        return `${firstName} ${lastName}`;
    }
    set fullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
   }

   console.log(person.fullName);
   console.log(person.fullName('santhosh', 'reddy'));
 ```

 ## Error Handling

 * we can use error object - in order to throw an exception, with user defined message.

 ```
 const person = {
        firstName: 'Sudarshana',
        lastName: 'Reddy',
        
        set fullName(value) {
            let error = new Error('value is not a string');
            if(typeof value!=string) 
            throw e;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    try { 
        person.fullName = '';
    } catch(e) {
        alert(e);
    }
 
 ```

## Local vs Global Scope

* If a variable is defined both in global and local scope - local variables takes the precendence.

* As best practice - it is recommented that we don't declare variables at global scope.


## let vs var

* var - creates the variables with **function scope** when declared inside a function.
* var - attaches variables to the **window object** when defined in the global scope.
* let - creates the variables in the block scope.

 ```
   function display() {
     for(var i=0;i<5;i++) {
        console.log(i);
     }
     console.log(i); // i is accessible here even though declared inside for loop.
   }
 ```

 ## this keyword

 * this - keyword references **the curret object** when referenced inside a method of an object.

 * this - keyword refereces **window** when used in a global function.

    ```
    const video = {
        title : 'a',
        tags: ['a','b','c'],
        play() {
            this.tags.forEach(tag => {
                console.log(this.titla, tag);
            }, this); //this refereces current object.
            cosole.log(this); //refereces video object
        }
    }

    function stop () {
        console.log(this); // refereces window object.
    }
    ```

## changing this keyword

* In order to change the this to point to an object we want to work with we can use the following methods.

    * call, apply and bind.




