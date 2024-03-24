let a = {
    name: "chae", more: {
        gender: "M"
    }
};

// 얕은 복사
let b = { ...a };
// b.more.gender = "F";
// b.name = "hyeong";

console.log(a); //{ name: 'chae', more: { gender: 'F' } }
console.log(b); //{ name: 'hyeong', more: { gender: 'F' } }
console.log(a === b); //false

// 깊은 복사
let c = JSON.parse(JSON.stringify(a));
c.more.gender = "F";

console.log(a); // { name: 'chae', more: { gender: 'F' } }
console.log(c); // { name: 'chae', more: { gender: 'F' } }
console.log(a === c); //false