console.log("Hello World");
/*
Il programma dovrà chiedere all'utente:
-il numero di chilometri che vuole percorrere
-l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65 (fortunelli).

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

/*
TOOLS:
-document.querySelector('input').value; o document.getElementById('').value
-2 variabili per racchiudere questi dati>let/const
-condizionali che si sviluppano a partire dai dati acquisiti
-risultato riportato in console
*/
//prendo dato dei km e racchiudo in costante
let distance = document.getElementById("number").value;

//prendo dato dell'età e racchiudo in costante
let age = document.getElementById("age").value;

//prendo form e racchiudo in costante
let form = document.getElementById("form");

//stampo i dati in console
console.log(distance);
console.log(age);
console.log(form);

//event listener
form.addEventListener('submit',function(event){
    event.preventDefault(); //prevents from autosubmitting

    let distance = document.getElementById("number").value; //prendo dato km inserito da utente
    console.log(distance);

    let age = document.getElementById("age").value; // prendo dato eta inserito da utente
    console.log(age);

    //confronto km utente con km del servizio per un prezzo iniziale (non tiene ancora conto della eta) e salvo in una variabile il risultato effettivo
    let price = Math.floor(distance * .21);
    console.log(price);


//confronto età utente con condizionale per capire quale sconto applicare (se lo sconto si applica)
// (se < 18 ottiene -20% se >65 ottiene -40%)

let PrezzoFinale;  //dichiarazione variabile finale

if (age < 18) {
    PrezzoFinale = price - (price * .2);  //semplifico calcolo percentuale facendo 20 / 100 = .2
} else if (age > 65) {
    PrezzoFinale = price - (price * .4);
} else {
    PrezzoFinale = price;
}

document.querySelector('.card.rounded-0').innerHTML = ` il tuo biglietto per percorrere ${distance} km è di ${PrezzoFinale} dobloni `;
}); 

