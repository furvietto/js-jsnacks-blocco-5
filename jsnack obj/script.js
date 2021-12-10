// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

let calc = 0

for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i];
    calc += element.peso
}

console.log(calc);