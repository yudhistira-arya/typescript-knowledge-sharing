/**
 * Generator function
 */
export function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

export function* pauseableFunction() {
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution end');
}

export function* twoWayGeneratorFunction() {
    const bar = yield 'foo'; // bar may be *any* type
    console.log(`generator: ${bar}`); // bar!
}
