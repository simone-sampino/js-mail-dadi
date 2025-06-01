/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
let user_number = Math.floor(Math.random() * 6) + 1;
console.log('Il tuo numero casuale è: ' + user_number);

let computer_number = Math.floor(Math.random() * 6) + 1;
console.log('Il numero casuale del computer è: ' + computer_number);

// Stabilire il vincitore, in base a chi fa il punteggio più alto
if (user_number > computer_number) {
    alert('Hai vinto tu!\nIl tuo dado ha generato: ' + user_number + '\nMentre quello del computer ha generato: ' + computer_number);
} else if (computer_number > user_number) {
    alert('Il computer ti ha battuto. Conquisterà il mondo!\nIl tuo dado ha generato: ' + user_number + '\nMentre quello del computer ha generato: ' + computer_number);
} else {
    alert("Incredibile, avete pareggiato! Quante probabilità c'erano?\nEntrambi i dadi hanno generato: " + user_number); //usare user o computer number è irrilevante dal momento che i numeri sono identici
}