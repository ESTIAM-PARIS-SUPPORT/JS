const numbers = [3, 2, 1, 2, 3, 5, 6];

const numberSquares = numbers.map(function (number) {

    return number * number;
});

console.log(numbers);
console.log(numberSquares);

const bad = numbers.map(function (number) {
    number * number;

    return 1
});

console.log(bad);
