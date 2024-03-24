let a = 1;
let b = a;

b = 2;
console.log(a); // 1
console.log(b); // 2
console.log(a === b); // false

let c = { name: "chae" };
let d = c;

d.name = "chaechae";

console.log(c.name);  // chaechae
console.log(d.name); // chaechae
console.log(c === d); // true