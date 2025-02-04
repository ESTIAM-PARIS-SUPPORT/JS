
const rootUl = document.querySelector('#root > ul');
const btn = document.getElementById('btn');
const fragment = document.createDocumentFragment(); // optimisé
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// initialisation 
createList(numbers);

function shuffle(num) {
    num.sort(_ => Math.random() - .5);

    return num;
}
function createList(numbers){
    numbers.forEach(function (number) {
        const li = document.createElement("li");
        li.textContent = number;
        fragment.appendChild(li); // touche pas au DOM
    });
    
    rootUl.appendChild(fragment);
}

// event
btn.addEventListener('click', function () {
    rootUl.innerHTML = "";
    shuffle(numbers);
    createList(numbers);
});