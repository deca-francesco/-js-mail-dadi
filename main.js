console.log("js linked");

/*
Esercizio Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

// Variabili
let email;
let user_list = [];

// Dati
// creo un prompt che mi restituisce l'email dell'utente
email = prompt("Inserisci la tua email");
console.log(email);

// Elaborazione
// creo una condizionale che verifica che la mail sia presente nell'array
