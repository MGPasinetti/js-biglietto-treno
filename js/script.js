/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let km = prompt (`Chilometri che si vogliono percorrere:`);
let age = prompt (`Età del passeggero`);

let age18 = 18;
let age65 = 65;
let priceKm = 0.21;
let ticketPrice = km * priceKm;
document.write(ticketPrice);

// let outputEle = document.getElementById(`my-output`);

// if (age >= age18) {
//     alert ("tickePrice")
// } else if (age <= age65) {
//     outputEle.innerHTML = console.log (`ticketPrice`);
// } else {
//     outputEle.innerHTML = console.log (`ticketPrice`);
// }

// console.log (
//     `ticketPrice`
// );




