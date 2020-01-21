interface Person {
    firstName: string,
    lastName: string,
    gender: "female" | "male" | "other",
    race?: "human" | "elf" | "dwarf" | "witcher" | "mage" | "monster"
}

function printPerson(person: Person) {
    console.log(`First name: ${person.firstName}, last name: ${person.lastName}, gender: ${person.gender}, race: ${person.race}`);
}

printPerson({firstName: "Geralt", lastName: "Rivia", gender: "male", race: "witcher"});

// Not recommended
// printPerson({} as any);
