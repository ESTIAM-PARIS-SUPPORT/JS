const button = document.getElementById('onClick');
const root = document.getElementById('root');
let count = 0;
// Ajouter un gestionnaire d'événement pour le clic
button.addEventListener('click', function () {
    const el = document.createElement('p');
    el.innerText = count;
    root.appendChild(el);
    count++;
});