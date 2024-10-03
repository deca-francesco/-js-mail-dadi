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


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

// Variabili
let user_score;
let cpu_score;
let winner_is = "Il vincitore è: ";
let winner;

// Elaborazione
// genero i 2 numeri random e li assegno alle variabili
user_score = Math.floor(Math.random() * 6) + 1;
cpu_score = Math.floor(Math.random() * 6) + 1;

// confronto i punteggi per vedere chi vince
if (user_score > cpu_score) {
    winner = "GIOCATORE";
}
else if (user_score < cpu_score) {
    winner = "CPU";
}
else if (user_score = cpu_score) {
    winner = "NESSUNO, PARITà!";
}

// output
console.log(`GIOCATORE: ${user_score} CPU ${cpu_score}`);
console.log(winner_is, winner);
alert(`GIOCATORE: ${user_score} 
CPU: ${cpu_score} 
${winner_is} ${winner}`);
