console.log("js linked");

/*
Esercizio Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

// Variabili
let email;
let user_list = ["email1", "email2", "email3"];
// let can_access = false;
console.log(user_list);

// Dati
// creo un prompt che mi restituisce l'email dell'utente
email = prompt("Inserisci la tua email");
console.log(email);

// Elaborazione e output
// creo una condizionale che verifica che la mail sia presente nell'array e restituisco un alert all'user


// includes cicla nell'array, quindi è lo stesso che scrivere un ciclo for
/*
for (let i = 0; i < user_list.length; i++) {
    // prendo il singolo elemento dell'array
    const user_index = user_list[i];

    //controllo se c'è nell'array
    if (user_index == email) {
        can_access = true;
        break;      // interrompiamo il ciclo appena trova l'email
    }
}
*/
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

/*
// Variabili
let user_score;
let cpu_score;
const winner_is = "Il vincitore è: ";
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
console.log(`GIOCATORE: ${user_score} | CPU ${cpu_score}`);
console.log(winner_is, winner);
alert(`GIOCATORE: ${user_score} 
CPU: ${cpu_score} 
${winner_is} ${winner}`);
*/

// continuiamo a far andare il gioco

let play_again = true;

// usiamo il ciclo while sfruttando la facilità con cui facciamo cicli infiniti
// è come un ciclo for senza incremento
while (play_again) {
    // Variabili
    let user_score;
    let cpu_score;
    const winner_is = "Il vincitore è: ";
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
    console.log(`GIOCATORE: ${user_score} | CPU ${cpu_score}`);
    console.log(winner_is, winner);
    alert(`GIOCATORE: ${user_score} 
CPU: ${cpu_score} 
${winner_is} ${winner}`);

    play_again = confirm("Giochi ancora?")      // confirm
}

console.log("Ok, alla prossima!");
alert("Alla prossima!")
