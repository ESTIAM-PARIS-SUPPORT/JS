const numbers = [3, 2, 1, 2, 3, 5, 6];


function s(number){
     return number == 5;
}

console.log( numbers.find(s) );

console.log( numbers.find(function(number) {
    return number == 5
}) );

console.log( numbers.findIndex(function(number) {
    return number == 1
}) );
