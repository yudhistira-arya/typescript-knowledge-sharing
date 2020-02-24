import {Observable} from "rxjs";

let counter: number = 0;

export function doubleSubscriber() {
    const observable = new Observable(observer => {
        slowProcessing(() => observer.next(`task a. Execution no: ${counter++}`));
        slowProcessing(() => observer.next(`task b. Execution no: ${counter++}`));
        slowProcessing(() => observer.next(`task c. Execution no: ${counter++}`));
    });

    const firstSubscriber = observable.subscribe(value => {
        console.log(`first-subscriber: ${value}`);
    });

    setTimeout(() => {
        // this will re-trigger the slowProcessing inside the observable
        const secondSubscriber = observable.subscribe(value => {
            console.log(`second-subscriber: ${value}`)
        })
    }, 1000);
}

function slowProcessing(handler: () => void) {
    setTimeout(handler, Math.floor(Math.random() * 1000));
}

