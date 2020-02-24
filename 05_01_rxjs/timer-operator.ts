import {timer} from "rxjs";

export function simpleTimer() {
    // first emit after 100ms delay then emit every 200ms after that.
    const observable = timer(99, 200);
    observable.subscribe(value => {
        console.log(`first-subscriber: ${value}`);
    });
}