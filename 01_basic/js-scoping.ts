export function jsScopingBlock() {
    console.log(">>>> jsScopingBlock start");
    var foo = 123;
    if (true) {
        var foo = 456;
    }
    console.log(foo);

    if (true) {
        var bar = 789;
    }
    console.log(bar);
    console.log(">>>> jsScopingBlock end");
}

export function jsScopingLoop() {
    console.log(">>>> jsScopingLoop start");
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
    console.log(">>>> jsScopingLoop end");
}

export function jsLocalScopingLoop() {
    console.log(">>>> jsLocalScopingLoop start");
    var funcs = [];
    // define a collection of functions
    for (var i = 0; i < 3; i++) {
        (function () {
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
    console.log(">>>> jsLocalScopingLoop end");
}

export function letScoping() {
    console.log(">>>> letScoping start");
    let foo = 123;
    if (true) {
        let foo = 456;
        console.log(foo);
    }
    console.log(foo);

    if (true) {
        let bar = 789;
    }
    try {
        // this will throw error
        // @ts-ignore - for demonstration purpose
        console.log(bar);
    } catch(error) {
        console.log("bar is undefined")
    }
    console.log(">>>> letScoping end");
}

export function forInLoop() {
    console.log(">>>> forInLoop start");

    const letters = "ABC";
    // @ts-ignore - for demonstration purpose
    for (let value in letters) {
        console.log(value);
    }

    const obj = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4
    };

    for (let value in obj) {
        // a, b, c, d
        console.log(value);
    }

    let numbers = [1, 2, 3];

    for (let value in numbers) {
        // 0, 1, 2
        console.log(value);
    }

    console.log(">>>> forInLoop end");
}

export function forOfLoop() {
    console.log(">>>> forOfLoop start");
    const array = ['a', 'b', 'c'];
    for (let value of array) {
        // abc
        console.log(value);
    }

    let string = "banana";
    for (let value of string) {
        // banana
        console.log(value);
    }
    console.log(">>>> forOfLoop end");
}