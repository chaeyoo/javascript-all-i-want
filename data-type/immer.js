import {produce} from 'immer';

let a = {
    more: {
        gender: "male"
    }
};

let b = produce(a, draft => {
    draft.more.gender = 'female';
});

console.log(a === b);
console.log(a.more.gender);
console.log(b.more.gender);