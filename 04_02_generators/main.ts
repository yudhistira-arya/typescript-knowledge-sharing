import {infiniteSequence, pauseableFunction, twoWayGeneratorFunction} from "./generator";

// generator function use case 1: lazy iterator
// const iterator = infiniteSequence();
// let flag = true;
// // you can change this to while(true) { .. }
// for (let i = 0; i < 100000; i++) {
//     console.log(iterator.next().value);
// }

// generator function use case 2: pause-able function
// const fromPausableIterator = pauseableFunction();
// console.log('Starting...'); // This will execute before anything in the generator function body executes
// console.log(fromPausableIterator.next()); // { value: 0, done: false }
// console.log(fromPausableIterator.next()); // { value: 1, done: false }
// console.log(fromPausableIterator.next()); // { value: undefined, done: true }

// pass in value to generator during resume
// const twoWayGeneratorIterator = twoWayGeneratorFunction();
// let twoWayGenerator = twoWayGeneratorFunction();
// const foo = twoWayGenerator.next();
// console.log(`generator: ${foo.value}`);
// const nextThing = twoWayGenerator.next("bar");
// console.log(`generator: Value ${nextThing.value}`); // undefined
// console.log(`generator: Is done ${nextThing.done}`); // true - because no more yield
