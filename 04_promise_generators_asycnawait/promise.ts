import {promises as fs} from "fs";

export function loadJsonPromise(filename: string): Promise<any> {
    return fs.readFile(filename) // we are using promise variant of fs
        .then(data => JSON.parse(data.toString()))
}
