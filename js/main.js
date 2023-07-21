// // const etaDelPasseggero = prompt("Quanti anni hai?");
// // const eta = parseInt(etaDelPasseggero);

// // const kmDaPercorrere = prompt("Quanti km devi percorrere?");
// // const km = parseFloat(kmDaPercorrere);

// // let prezzoKm = km * 0.21;

// // if (eta < 18) {
// //   let scontoVenti = (prezzoKm / 100) * 20;
// //   prezzoKm = prezzoKm - scontoVenti;
// // } else if (eta > 65) {
// //   let scontoQuaranta = (prezzoKm / 100) * 40;
// //   prezzoKm = prezzoKm - scontoQuaranta;
// // }

// // document.getElementById("pluto").innerHTML = "prezzo finale: " + prezzoKm;

// // Funzione per calcolare il prezzo del biglietto
// function calcolaPrezzo() {
//   const nomePasseggero = document.getElementById("nomePasseggero").value;
//   const cognomePasseggero = document.getElementById("cognomePasseggero").value;
//   const etaDelPasseggero = document.getElementById("etaPasseggero").value;
//   const eta = parseInt(etaDelPasseggero);

//   const kmDaPercorrere = document.getElementById("kmDaPercorrere").value;
//   const km = parseFloat(kmDaPercorrere);

//   let prezzoKm = km * 0.21;

//   if (eta < 18) {
//     let scontoVenti = (prezzoKm / 100) * 20;
//     prezzoKm = prezzoKm - scontoVenti;
//   } else if (eta > 65) {
//     let scontoQuaranta = (prezzoKm / 100) * 40;
//     prezzoKm = prezzoKm - scontoQuaranta;
//   }

//   document.getElementById("resultNome").innerHTML = nomePasseggero;
//   document.getElementById("resultCognome").innerHTML = cognomePasseggero;
//   document.getElementById("resultEta").innerHTML = etaDelPasseggero;
//   document.getElementById("resultKm").innerHTML = kmDaPercorrere;
//   document.getElementById("resultPrezzoFinale").innerHTML =
//     prezzoKm.toFixed(2) + " €";

//   // Mostra la card con il risultato del biglietto calcolato
//   document.getElementById("bigliettoCard").classList.remove("d-none");
// }

// // Funzione per annullare i dati inseriti nel form
// function annullaForm() {
//   document.getElementById("nomePasseggero").value = "";
//   document.getElementById("cognomePasseggero").value = "";
//   document.getElementById("etaPasseggero").value = "";
//   document.getElementById("kmDaPercorrere").value = "";
//   //   document.getElementById("prezzoFinale").innerHTML = "prezzo finale: ";
//   document.getElementById("resultNome").innerHTML = "";
//   document.getElementById("resultCognome").innerHTML = "";
//   document.getElementById("resultEta").innerHTML = "";
//   document.getElementById("resultKm").innerHTML = "";
//   document.getElementById("resultPrezzoFinale").innerHTML = "";
//   // Nascondi la card riapplicando la classe d-none
//   document.getElementById("bigliettoCard").classList.add("d-none");
// }

// // Associa le funzioni agli eventi click dei bottoni
// document
//   .getElementById("btnCalcolaPrezzo")
//   .addEventListener("click", calcolaPrezzo);
// document.getElementById("btnAnnulla").addEventListener("click", annullaForm);

// Associa la funzione per calcolare il prezzo del biglietto all'evento click del pulsante "Calcola Prezzo"
document
  .getElementById("btnCalcolaPrezzo")
  .addEventListener("click", function () {
    const nomePasseggero = document.getElementById("nomePasseggero").value;
    const cognomePasseggero =
      document.getElementById("cognomePasseggero").value;
    const etaDelPasseggero = document.getElementById("etaPasseggero").value;
    const eta = parseInt(etaDelPasseggero);

    const kmDaPercorrere = document.getElementById("kmDaPercorrere").value;
    const km = parseFloat(kmDaPercorrere);

    let prezzoKm = km * 0.21;

    if (eta < 18) {
      let scontoVenti = (prezzoKm / 100) * 20;
      prezzoKm = prezzoKm - scontoVenti;
    } else if (eta > 65) {
      let scontoQuaranta = (prezzoKm / 100) * 40;
      prezzoKm = prezzoKm - scontoQuaranta;
    }

    document.getElementById("resultNome").innerHTML = nomePasseggero;
    document.getElementById("resultCognome").innerHTML = cognomePasseggero;
    document.getElementById("resultEta").innerHTML = etaDelPasseggero;
    document.getElementById("resultKm").innerHTML = kmDaPercorrere;
    document.getElementById("resultPrezzoFinale").innerHTML =
      prezzoKm.toFixed(2) + " €";

    // Mostra la card con il risultato del biglietto calcolato
    document.getElementById("bigliettoCard").classList.remove("d-none");
  });

// Associa la funzione per annullare i dati inseriti nel form all'evento click del pulsante "Annulla"
document.getElementById("btnAnnulla").addEventListener("click", function () {
  document.getElementById("nomePasseggero").value = "";
  document.getElementById("cognomePasseggero").value = "";
  document.getElementById("etaPasseggero").value = "";
  document.getElementById("kmDaPercorrere").value = "";

  // Nascondi la card riapplicando la classe d-none
  document.getElementById("bigliettoCard").classList.add("d-none");
});
