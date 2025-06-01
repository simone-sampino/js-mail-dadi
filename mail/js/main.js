/* Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email */

// Crea una lista di email di invitati ad una festa
const emails = ['tizio@gmail.com', 'caio@gmail.com', 'mario.rossi@gmail.com'];

// Chiedi all’utente la sua email
const yuor_email = prompt('Inserisci la tua email');
let presence = false;

// Controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato sull’esito del controllo

for (let i = 0; i < emails.length; i++) {
    
    if (yuor_email === emails[i]) {
        presence = true
        break;
    }
}

if (presence) {
        alert('Sei invitato!');
    } else {
        alert('Non sei stato invitato, mi dispiace :(');
    }