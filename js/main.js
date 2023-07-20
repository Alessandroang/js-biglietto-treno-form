// const etaDelPasseggero = prompt("Quanti anni hai?");
// const eta = parseInt(etaDelPasseggero);

// const kmDaPercorrere = prompt("Quanti km devi percorrere?");
// const km = parseFloat(kmDaPercorrere);

// let prezzoKm = km * 0.21;

// if (eta < 18) {
//   let scontoVenti = (prezzoKm / 100) * 20;
//   prezzoKm = prezzoKm - scontoVenti;
// } else if (eta > 65) {
//   let scontoQuaranta = (prezzoKm / 100) * 40;
//   prezzoKm = prezzoKm - scontoQuaranta;
// }

// document.getElementById("pluto").innerHTML = "prezzo finale: " + prezzoKm;

// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo() {
  const nomePasseggero = document.getElementById("nomePasseggero").value;
  const cognomePasseggero = document.getElementById("cognomePasseggero").value;
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
}

// Funzione per annullare i dati inseriti nel form
function annullaForm() {
  document.getElementById("nomePasseggero").value = "";
  document.getElementById("cognomePasseggero").value = "";
  document.getElementById("etaPasseggero").value = "";
  document.getElementById("kmDaPercorrere").value = "";
  document.getElementById("prezzoFinale").innerHTML = "prezzo finale: ";
}

// Associa le funzioni agli eventi click dei bottoni
document
  .getElementById("btnCalcolaPrezzo")
  .addEventListener("click", calcolaPrezzo);
document.getElementById("btnAnnulla").addEventListener("click", annullaForm);
