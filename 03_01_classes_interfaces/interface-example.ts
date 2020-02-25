export interface Person {
    name: string;
    age?: number;
    getDetail?: (this: Person) => string; // function type definition
}

export function interfaceDemo() {
    let izzul: Person = {name: "Izzul"}  as Person;
    console.log(`person name: ${izzul.name}`);

    let izzul2: Person = {name: "Izzul", age: 17};
    console.log(`person name: ${izzul2.name}, person age: ${izzul2.age}`);

    let izzul3: Person = {
        name: "Izzul",
        age: 17,
        getDetail: function() {
            let that = this;
            return `Name is: ${that.name}. Age: ${that.age}`;
        }
    };
    console.log(izzul3.getDetail());

    let thisWontWork: Person = {
        name: "Izzul",
        age: 17,
        getDetail: () => {
            return `Name is: ${this.name}. Age: ${this.age}`;
        }
    };
    console.log(thisWontWork.getDetail());
}