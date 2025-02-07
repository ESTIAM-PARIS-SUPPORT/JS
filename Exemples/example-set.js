
const e = new Set();

const notes = [ 10, 11, 11, 14,14, 14, 14, 16];
const uniqueV = [];

for(const note of notes){
    if(uniqueV.includes(note) == false){
        uniqueV.push(note);
    }
}

console.log(uniqueV.length);

// avec Set
const uV = new Set(notes); 
console.log(uV.size);

const phrase ="mississippi";
const letters = new Set(phrase);
console.log(letters) ;