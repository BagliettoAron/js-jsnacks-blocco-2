// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedo all'utente un numero
let userNumber = parseInt(prompt("digita un numero"));
console.log("numero inserito dall'utente", userNumber);

// creo un'array vuoto
const numbersCubeElevationList = [];

// genero numeri incrementali minori di quello inserito dall'utente
for (i = 1; i < Number(userNumber); i++ ) {
    let generateNumber = [i]
    console.log("numero inferiore a quello generato dall'utente", generateNumber);

    // calcolo l'elevazione al cubo dei numeri ricavati in precedenza
    let numberCubeElevation = (Math.pow(generateNumber, 3));
    console.log("numero inferiore da quello inserito dall'utente, elevato al cubo", numberCubeElevation);

    // inserisco i numeri ricavati dal passaggio precedente nell'array vuoto
    numbersCubeElevationList.push(numberCubeElevation);

}

console.log("cubo dei primi N numeri, dove N è un numero indicato dall'utente.", numbersCubeElevationList);
// calcolo il cubo di ogni numero minore di quello fornito dall'utente