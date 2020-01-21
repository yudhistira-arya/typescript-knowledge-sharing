## 00: Overview

Benefit of using Typescript: 

* Optional type system 
    * Debatable: reduce runtime bugs if used correctly.
        ``` 
        interface Person {
            id: string;
            name: string;
        }

        function sayHello(person: Person) {
            console.log(person.name);
        }
        // don't do this!
        sayHello({} as any);
        ```

* Encourage developers to practice design-by-contracts.
    ``` 
    export function printPerson(person: Person) {
        console.log(`First name: ${person.firstName}, last name: ${person.lastName}, gender: ${person.gender}`);
    }

    export interface Person {
        firstName: string,
        lastName: string,
        gender: "female" | "male" | "other"
    }
    ```
* Tooling: Webstorm and VsCode seems to work better with Typescript
    * If used correctly, it's more refactoring friendly than JavaScript
    * If used correctly, it can provide accurate intellisense (code auto-complete)

### Configuration

Dependencies: 

1. Ensure that Node.js is installed and added to the path environment variable.
    * for Windows:  
        * Download from [here](https://nodejs.org/en/download/)
        * Add Node.js binary directory to _Path_ environment variable: ![path](installing-node-path.PNG)
        * Add `NODE_PATH` environment variable to allow access to global `node_modules`. Usually it points to `node_modules` under npm, e.g. 
          `C:\Users\YOUR_HOME_DIRECTORY\AppData\Roaming\npm\node_modules`
        * Alternatively use chocolatey: `choco install nodejs`
    * for OSX/MacOS: 
        * Install [homebrew](https://docs.brew.sh/Installation)
        * `brew install node`
1. `npm install typescript` 
1. `npm install tslib`: to allow the use of `async-await` construct. 

Typescript has a community repository of types located at `http://definitelytyped.org/`. It's npm-scoped under `@types`. For example, if 
you want type definition for Node.js server development: `npm install --save @types/node`. 

## 01: Basic

### JavaScript scoping

**Important**: By default, variables in JavaScript are function scoped instead of block scoped. This rule still applies 
to Typescript.

``` 
var foo = 123;
if (true) {
    // In Java this won't even compile
    var foo = 456;
}
console.log(foo); 

if (true) {
    var bar = 789;
}
console.log(bar);
```

Typical issue with JavaScript scoping: 

``` 
var funcs = [];
// define a collection of functions
for (var i = 0; i < 3; i++) {
    funcs.push(function() {
        // i is from the global scope
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
```
* What's the expected result?

Compare the code above with: 

``` 
var funcs = [];
// define a collection of functions
for (var i = 0; i < 3; i++) {
    (function () {  // notice that there's additional layer of function here
        var local = i;
        funcs.push(function() {
            console.log(local);
        })
    })();
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
```

### Variable declaration

`var` vs. `let` vs. `const`

* `var` function-scoped
* `let` block-scoped. (introduced in Ecmascript 6) 
    ``` 
    let foo = 123;
    if (true) {
        let foo = 456;
        console.log(foo);
    }
    console.log(foo);
    ```
* `const` block-scoped and final. (introduced in Ecmascript 6) 

### Looping

Besides the basic `for`, there 2 additional types of for loop: 

* `for...in`: Iterate based on enumerable properties. Basically it will iterate based on index.
    ``` 
    const letters = "ABC";
    // @ts-ignore - for demonstration purpose
    for (let value in letters) {
        console.log(value); // 0, 1, 2
    }
    ```
* `for...of`: Iterate based on iterable collections. Iterables collection is an object that have a `[Symbol.iterator]` 
  property. Example of iterables collection are array and string.
    ``` 
    const array = ['a', 'b', 'c'];
    for (let value of array) {
        // abc 
        console.log(value);  
    }
  
    let string = "banana"
    for (let value of string) {  
        // banana
        console.log(value);
    }
    ```
  
There's also `array.forEach` and `array.map` functions.

### Double Arrow Function

## 02: Object, Classes, Interfaces

### Classes

### Interfaces

### Object Literal

### Spread Operator

## 03: Promise

## 04: Generators

## 05: Async-await