function printPerson(person) {
    console.log("First name: " + person.firstName + ", last name: " + person.lastName + ", gender: " + person.gender + ", race: " + person.race);
}
printPerson({ firstName: "Geralt", lastName: "Rivia", gender: "male", race: "witcher" });
// Not recommended
printPerson({});
