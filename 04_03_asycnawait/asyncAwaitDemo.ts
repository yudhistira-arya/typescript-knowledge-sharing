export function asyncAwaitDemo() {
    console.log("async: before async function");
    let resultPromise = asyncFunction();
    console.log("async: after async function");
    // wait for the promise to complete
    Promise.all([resultPromise,]);
}

function delay(millisecond: number, count: number) {
    return new Promise<number>(resolve => {
        setTimeout(() => resolve(count), millisecond);
    })
}

// @ts-ignore
async function asyncFunction() {
    console.log("async: before first await");
    const res1 = await delay(100, 10); // it will still sync tilll this point where await will yield to the caller
    console.log(`async: ${res1}`);

    const res2 = await delay(200, 11);
    console.log(`async: ${res2}`);

    const res3 = await delay(1000, 12);
    console.log(`async: ${res3}`);
    return res3;
}
