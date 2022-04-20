// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// CICLO FOR

let sum = 0;

for (let i = 0; i < 5; i++){
    let userNumber = parseInt(prompt("Inserisci un numero"))
    console.log("numero inserito dall'utente", userNumber);
    sum += userNumber;
}

console.log("somma dei numeri inseriti dall'utente", sum);

// CICLO WHILE

let i = 0;

let sum2 = 0;

while (i < 5) {
    i++
    let userNumber = parseInt(prompt("Inserisci un numero"));
    console.log("numero inserito dall'utente", userNumber);
    sum2 += userNumber;
}

console.log("totale dei numeri inseriti dall'utente", sum2);

