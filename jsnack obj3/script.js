// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letters = ["a","b","c"];
const numbers = [1,2,3];
const total = [];

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const number = numbers[i];
    total.push(letter,number);
}

console.log(total);