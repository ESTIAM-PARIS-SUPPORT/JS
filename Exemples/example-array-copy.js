let a = 10;
let b = 7;
a = b ;
console.log(a, b);
b = 3 ;
console.log(a, b);
let n = [1, 2, 3];
// l'assignation pour les tableaux et les objets fonctionne comme un référence
let p = n ;

// mais vous pouvez créez une nouvelle réfécence en utilisant un map
let q = n.map( function(e) { return e ; }) ;

console.log(p);
p[0] = 7 ;
console.log(p);
p[1] = 11 ;
console.log(p);
// impact le tableau n
console.log(n);

// on peut également utiliser le spread operator 
let c = [...n];

// le spread operator permet de rassembler plus valeurs et tableux 
let m = [8, 9]
let r = [1, 2, ...m, 9, 10];

console.log(r);

