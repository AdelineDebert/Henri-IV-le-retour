
var question = [
  "Quelle est la couleur du cheval blanc d'Henri IV",
  "Combien y a t il de nains dans 'Blanche Neige et les 7 nains' ?",
  "De quelle couleur est la cape du petit chaperon rouge ?",
  "Combien y a t il de chiens dans 'les 101 dalmatiens' ?"
];

var reponse = [
  "blanc",
  "7",
  "rouge",
  "101"
];

var score = 0;
function pourTout() {
  var indexQuestion = Math.floor(Math.random()*question.length);
  var random = question[indexQuestion];
  var userReponse = prompt (random);

  if (userReponse === reponse[indexQuestion]) {
      console.log("WE ARE THE CHAMPION");
      question.splice(indexQuestion, 1);
      reponse.splice(indexQuestion, 1);
      score ++;
      alert("Votre score est : " + score + " point(s) !");
        while (question.length !== 0) {
      pourTout();
        }
  } else {
      alert("LOSER !!! Votre score est : " + score + " point(s) !");
   }
}

pourTout();
