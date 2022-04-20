// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// // lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo array dei nomi
const names = ["Aron", "Sara", "Julia", "Luca", "Matteo", "Ale"]
console.log("array dei nomi", names);

// creo array dei cognomi
const lastNames = ["Musk", "Gates", "Shatner", "Nimoy", "Kelley", "Segan"]
console.log("array dei cognomi", lastNames);

// creo array vuota che diventerà la lista delle identità false
let fakeIdentityList = [];

// ripeto tutta l'operazione 3 volte
for (let i = 0; i < 3; i++) {
    
    // genero numero casuale per nome
    const randomNumberName = Math.floor(Math.random() * 6);
    console.log("numero casuale generato per il nome", randomNumberName);
    
    // genero nome casuale
    let randomName = names[randomNumberName]
    console.log("nome casuale generato", randomName);
    
    // genero numero casuale per cognome
    const randomNumberLastName = Math.floor(Math.random() * 6);
    console.log("numero casuale generato per il cognome", randomNumberLastName);
    
    // genero nome casuale
    let randomLastName = lastNames[randomNumberLastName]
    console.log("cognome casuale generato", randomLastName);
    
    // concateno il cognome al nome
    let fakeIdentity = `${randomName}, ${randomLastName}`;
    console.log("IDENTITA' FALSA:", fakeIdentity);
    
    // pusho nell'array della falsa lista
    fakeIdentityList.push(fakeIdentity);
    
}

console.log("lista delle 3 identità false", fakeIdentityList);
