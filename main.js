// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i
// numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati
// individuati.

$(document).ready(function() {

// Generare casualmente 5 numeri e esporli in DOM
  // Creo un array in cui inserire i 5 listaNumeriSafe
  var numbers = [];

  var max = 99;

  numbers = fiveRandomNumbers(numbers, max);
  console.log(numbers);

  function fiveRandomNumbers(numbers, max) {
    while (numbers.length < 5) {
      var numero = randomNumber(1, max)

      if (!numbers.includes(numero)) {
        numbers.push(numero)
      }
    }
    return numbers
  }

   // Stampo i numeri e li rendo visibili per 30 secondi
  $(".numeri").text("Hai 30 secondi per memorizzare i seguenti numeri: " + numbers)

  function hideNumbers() {
    $(".numeri").hide();
  }

  setTimeout(hideNumbers, 30000);

  // Chiedo all'utente 5 numeri e creo array in cui inserirli, mostro risultati su DOM
  var numeriUtente = [];
  var numeriErrati = [];
  var score = numeriUtente.length;


  setTimeout(function(){
    console.log(numbers);

    for (var i = 0; i < 5; i++) {
      var sceltaUtente = parseInt(prompt("Inserisci il tuo numero:"));
      if (!isNaN(sceltaUtente) && (numbers.includes(sceltaUtente))) {
        numeriUtente.push(sceltaUtente);
        $(".truenumbers").text("I numeri: " + numeriUtente + " sono esatti.")
      }else if (!isNaN(sceltaUtente) && (!numbers.includes(sceltaUtente))) {
        numeriErrati.push(sceltaUtente);
        $(".falsenumbers").text("I numeri: " + numeriErrati + " sono sbagliati.")
      }
      $(".score").text("Hai totalizzato " + numeriUtente.length + " punti");
      $(".failed").text("Hai sbagliato " + numeriErrati.length + " numeri")
    }

    console.log(numeriUtente);
    return numeriUtente;
}, 30100)






})



// Functions
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
