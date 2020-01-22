import {loadJSONCallback} from "./callback";
import {loadJsonPromise} from "./promise";

// callback variant
loadJSONCallback("./sample.json", (error, result) => {
    if (error) {
        console.log(`Callback: Error happened: ${error}`);
    } else {
        console.log(`Callback: JSON content for hello property is: ${result.hello}`);
    }
});

// promise variant
loadJsonPromise("./sample.json")
    .then(jsonData => console.log(`Promise: JSON content for hello property is: ${jsonData.hello}`))
    .catch(error => console.log(`Promise: Error happened: ${error}`));
