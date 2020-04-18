$ (document).ready(function(){

  // Griglia 6x6,
  // ad ogni click (su ogni rettangolino) parte una richiesta AJAX
  // che prende un numero random da 1 a 9 (primo end-point della API in slide).

  $ ('.square').click(
    function () {

      var random;
      var quadrato= $(this);
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato){
          console.log(data);
          random = data.response;
          // Il numero ottenuto appare al centro del quadrato
          $(quadrato).html(random);
          // Se il num ritornato è <= 5 il quadrato diventa giallo,
          if (random <=5) {
            $(quadrato).addClass('giallo');
          } else {  // se è > di 5 il quadrato diventa verde.
            $ (quadrato).addClass('verde');
          }
        },
        error: function (richiesta, stato, errori){
          alert('è avvenuto un errore' + errori);
        }
      });
  });
});
