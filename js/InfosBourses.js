
// Gestion des onglets
  function openTab(evt, tabName) {
    let tabContents = document.getElementsByClassName("tab-content");
  for (let tab of tabContents) {
    tab.style.display = "none";
  }

  let tabButtons = document.getElementsByClassName("tab-button");
  for (let btn of tabButtons) {
    btn.className = btn.className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

  // Initialisation de l'affichage des onglets (affichage par défaut de l'onglet actif)
  document.addEventListener("DOMContentLoaded", function() {
    // Afficher l'onglet actif dès le chargement
    document.getElementById("interne").style.display = "block";
});

  // Gestion du formulaire d'orientation
  document.getElementById('bourseForm').addEventListener('submit', function(e) {
    e.preventDefault();
  var moyenne = parseFloat(document.getElementById('moyenne').value);
  var isSportif = document.getElementById('sportif').checked;
  var isEngage = document.getElementById('engagement').checked;
  var resultMessage = "";


      // Critères d'orientation
      if (moyenne >= 14) {
    resultMessage = "Vous êtes éligible à la Bourse d'excellence (interne).";
      } else if (isSportif) {
    resultMessage = "Vous pouvez bénéficier de la Bourse sportive (externe).";
      } else if (isEngage) {
    resultMessage = "Vous pouvez bénéficier de la Bourse d'engagement communautaire (externe).";
      } else {
    resultMessage = "Aucune bourse spécifique n'a été identifiée pour votre profil. Veuillez contacter le service des bourses pour plus d'informations.";
      }

  // Affichage du résultat
  document.getElementById('resultText').innerText = resultMessage;
  document.getElementById('result').style.display = 'block';
    });
