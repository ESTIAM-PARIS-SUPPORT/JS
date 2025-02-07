let numbers = [1, 2, 3, 4, 5];

function shuffle(num) {
    num.sort(_ => Math.random() - .5);

    return num;
}

const ul = document.querySelector('#root >ul');
const fragment = document.createDocumentFragment();
const btn = document.getElementById('onClick');

function createLi(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const li = document.createElement('li');
        li.innerText = numbers[i];
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
}

createLi(numbers);

btn.addEventListener('click', function () {
    ul.innerHTML = "";
    numbers = shuffle(numbers);
    createLi(numbers);
});