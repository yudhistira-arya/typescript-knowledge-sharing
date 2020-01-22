// imagine this is the wrapper that return promise
export function runner(generatorFn) {
    // iterator returned after the first yield
    const itr = generatorFn;

    // this function is called recursively once the current promise is resolved
    function run(arg?) {
        const result = itr.next(arg);
        if (result.done) {
            // return current value once all yield (await) finished
            return result.value;
        } else {
            // execute next one once the first yielded promise resolved
            return Promise.resolve(result.value).then(run);
        }
    }
    return run();
}

function delay(millisecond: number, count: number) {
    return new Promise<number>(resolve => {
        setTimeout(() => resolve(count), millisecond);
    })
}


export function* asyncFunctionSimulation() {
    console.log("async: before first await");
    const res1 = yield delay(100, 10); // it will still sync tilll this point where await will yield to the caller
    console.log(`async: ${res1}`);

    const res2 = yield delay(200, 11);
    console.log(`async: ${res2}`);

    const res3 = yield delay(1000, 12);
    console.log(`async: ${res3}`);
    return res3;
}
