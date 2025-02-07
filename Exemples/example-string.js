const str = "bonjour tout le monde";
// const arr = str.split('');

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


function search_el(s, t) {
    for (let i = 0; i <= t.length - s.length; i++) {
        let count = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[j] == t[j + i]) {
                count++;
            }

            if (count == s.length) return i;
        }
    }
}

console.log( search_el("abc", "abdheduedeqcabcdesqu") );
