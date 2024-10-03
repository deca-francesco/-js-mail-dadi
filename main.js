console.log("js linked");

/*
Esercizio Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

// Variabili
let email;
let user_list = ["email1", "email2", "email3"];
console.log(user_list);

// Dati
// creo un prompt che mi restituisce l'email dell'utente
email = prompt("Inserisci la tua email");
console.log(email);

// Elaborazione e output
// creo una condizionale che verifica che la mail sia presente nell'array e restituisco un alert all'user
if (user_list.includes(email)) {
    console.log(`la mail ${email} è presente nell'array`);
    alert("Utente riconosciuto");
}
else {
    console.log(`la mail ${email} NON è presente nell'array`);
    alert("Utente NON riconosciuto!");
}