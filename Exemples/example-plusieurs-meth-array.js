const numbers = [3, 2, 1, 2, 3, 5, 6];


const n = numbers.map(function(num){
    return num * 1.2;
}).filter(function(num){
    return num > 4
}).map(function(num){
    return num * 100
}).map(function(num){

    return (Math.round(num*100) / 100)
})

console.log(n)