export function implicitBindings() {
    function foo() {
        console.log(`a is: ${this.a}`);
    }

    const obj = {
        a: 2,
        foo: foo,
    };

    obj.foo();
    // this.a is undefined in the context of setTimeout
    setTimeout(obj.foo, 100);
}

export function explicitBindings() {
    function foo() {
        console.log(`b is: ${this.b}`);
    }

    const obj = {
        b: 2,
    };

    try {
        foo(); // *this* is undefined
    } catch (error) {
        console.log(`Exception: ${error.message}`);
    }

    const bindFoo = foo.bind(obj); // bind will produce new function that is tied to the object
    setTimeout(bindFoo, 100);

    foo.apply(obj); // will call foo and assign *this* to obj
}

export function constructorBinding() {
    function Foo(a) {
        this.a = a;
    }
    const bar = new Foo( 2 );
    console.log(`constructor binding: a is ${bar.a}`); // 2
}

export function arrowFunction() {
    // simplify anonymous method
    const sum = [1, 2, 3].reduce((prev, curr) => prev + curr);
    console.log(`sum is: ${sum}`);

    // simplify the concept fo *this*;
    function Person() {
        this.age = 0;
        const handler = setInterval(() => {
            console.log(`Incrementing age: ${this.age++}`);
        }, 1000);

        // cancel the interval after 5 seconds
        setTimeout(() => {
            clearInterval(handler);
            console.log(`Final age is: ${this.age}`);
        }, 5000)
    }
    const p = new Person();
}
