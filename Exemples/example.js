let a = 1;
let b = 2;
let c = 3;

let t = a;

a = c;
c = b;
b = t;

// on refait quelque chose que l'on a déjà réalisé

let d = 11;
let e = 12;
let f = 13;

t = d;
d = f;
f = e;
e = t;

function permute(a, b, c) {
    let t = a;
    a = c;
    c = b;
    b = t;
    return { a, b, c }
}

console.log(permute(1, 2, 3));

let x = 10;
let y = 30;

let res = x + y;

let z = 10;
let u = 30;

res = z + u;

function add(x, y) {

    return x + y;
}

// parcourir un tableau 

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log('p', element);
}

numbers.forEach(function (v, i) {
    console.log('d', v, i);
});

function shuffle(num) {
    // .sort c'est sur un tableau JS
    num.sort(_ => Math.random() - .5);

    return num;
}

console.log(shuffle(numbers));