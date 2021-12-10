// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.



const zucchine = [
    {
        varieta: "mario",
        peso : 20,
        lunghezza: 10
    },
    {
        varieta: "pippo",
        peso : 22,
        lunghezza: 11
    },
    {
        varieta: "ciao",
        peso : 23,
        lunghezza: 12
    },
    {
        varieta: "cosa",
        peso : 24,
        lunghezza: 14
    },
    {
        varieta: "caso",
        peso : 25,
        lunghezza: 15
    },
    {
        varieta: "fulvio",
        peso : 26,
        lunghezza: 16
    },
    {
        varieta: "flavio",
        peso : 27,
        lunghezza: 18
    },
    {
        varieta: "chiaro",
        peso : 20,
        lunghezza: 10
    },
    {
        varieta: "chiara",
        peso : 20,
        lunghezza: 10
    },
    {
        varieta: "wow",
        peso : 20,
        lunghezza: 10
    },
]

const zucchineSmall = [];
let calcSmall = 0
const zucchineBig = [];
let calcBig = 0

for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i].lunghezza;
    if (element <= 15) {
        zucchineSmall.push(element)
        calcSmall += element
    }else if (element > 15) {
        zucchineBig.push(element)
        calcBig += element
    }
}

console.log(zucchineSmall);
console.log(calcSmall);
console.log(zucchineBig);
console.log(calcBig);