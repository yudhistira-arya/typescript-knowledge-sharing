import * as fs from "fs";

export function loadJSONCallback(filename: string, callback: (error: Error, result?: any) => void) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            return callback(err);
        }
        try {
            // Rule 03: Contain all your sync code in a try catch
            var parsed = JSON.parse(data.toString());
        }
        catch (err) {
            // Rule 02: never throw error, it should be handled by callback
            return callback(err);
        }
        // except when you call the callback
        return callback(null, parsed);
    });
}
