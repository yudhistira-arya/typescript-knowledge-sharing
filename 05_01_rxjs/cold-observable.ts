import {Observable} from "rxjs";

export function coldObservable() {
    const observable = new Observable(observer => {
        console.log("Begin producing observable data");
        observer.next(`first data`);
        observer.next(`second data`);
        observer.next(`third data`);
        console.log("Finish producing observable data");
    });

    console.log("Begin subscribing");
    observable.subscribe(value => {
        console.log(`Value: ${value}`);
    });
}