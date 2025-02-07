
const e = new Set();

const notes = [10, 11, 11, 14, 14, 14, 14, 16];
const uniqueV = [];

for (const note of notes) {
    if (uniqueV.includes(note) == false) {
        uniqueV.push(note);
    }
}

console.log(uniqueV.length);

// avec Set
const uV = new Set(notes);
console.log(uV.size);



const phrase = "mississippi";
const letters = new Set(phrase); // les lettres qu'une fois
for (const letter of letters) {
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] == letter) {
            count++;
        }
    }
    console.log(letter, count);
}

console.log('-----')

function countLetters(phrase) {
    const letters = new Set(phrase); // les lettres qu'une fois
    for (const letter of letters) {
        let count = 0;
        for (let i = 0; i < phrase.length; i++) {

            // pour ne pas compter les espaces
            if(phrase[i] == ' '){
                continue;
            }

            if (phrase[i] == letter) {
                count++;
            }
        }
        console.log(letter, count);
    }
}

countLetters("bonjour tout le monde")