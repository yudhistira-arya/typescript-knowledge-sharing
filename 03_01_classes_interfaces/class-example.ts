class Person {
    private readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Employee {
    private static readonly FULL_NAME_MAX_LENGTH = 15;
    private _fullName: string;

    get fullName(): string {
        console.log("Getting fullName");
        return this._fullName === undefined || this._fullName === null ? "" : this._fullName;
    }

    set fullName(newName: string) {
        console.log("Setting new fullName");
        if (newName && newName.length > Employee.FULL_NAME_MAX_LENGTH) {
            // validation before assigning
            throw new Error("fullName has a max length of " + Employee.FULL_NAME_MAX_LENGTH);
        }
        this._fullName = newName;
    }
}

export function classDemo() {
    let izzul = new Person("Izzul");
    console.log(`person is: ${izzul.getName()}`)
}

export function propertyAccessorDemo() {
    let employee = new Employee();
    employee.fullName = "Izzul";

    console.log(`Employee full name is ${employee.fullName}`);
}

