// try this in browser
var count = 1000;
function foo() {
    console.log(`count is: ${this.count++}`);
}
foo();
foo();
console.log(count);
