// console.log(a); // undefined
// var a; 

// console.log(b); //Cannot access 'b' before initialization
// let b;


console.log(test()); // 1
function test() {
    return 1;
}

console.log(test2()); // Cannot access 'test2' before initialization
const test2 = function () {
    return 1;
}