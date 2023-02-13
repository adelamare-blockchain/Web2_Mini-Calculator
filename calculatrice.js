// Projet mini calculatrice
// 4 modes differents (addition, multiplication, sousctraction, division)
// 1 mode ==> Entrez un premier nombre ==> Entrez un deuxieme nombre
// Mode division :
// ==> Message d'erreur ==> "Erreur : impossible de diviser par 0"
// Numero hors menu : interface propose de recommencer
// Nouvelle fonction appelée a chaque mode

// Quatrieme etape : Création des 4 fonctions

function addition(_nombreA, _nombreB) {
    return _nombreA + _nombreB;
}

function multiplication(_nombreA, _nombreB) {
    return _nombreA * _nombreB;
}

function soustraction(_nombreA, _nombreB) {
    return _nombreA - _nombreB;
}

function division(_nombreA, _nombreB) {   
    if (_nombreB == 0) {
        throw new Error ("Impossible de diviser par zéro !");
    }
    return _nombreA / _nombreB;
}

// On rentre dans la boucle principale
    let restart = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
do {
    
// Premiere etape : Menu entrée

    do {

        var choix = Number(prompt(
            "Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n"));
        
    } while(choix != 1 && choix != 2 && choix != 3 && choix != 4);

// Deuxieme etape : Entrez un premier nombre
// Troisieme etape : Entrez un deuxieme nombre

    do {

        var premierNombre = Number(prompt("Entrez un premier nombre :"));
        var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre :"));

    } while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

// Cinquieme etape : Sélection de la bonne fonction

try {

    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
           throw new Error ('Une erreur est survenue, veuillez réessayer.');
    }
    // Affichage du résultat
    alert("Le résultat est : " + resultat + " !");
    
} catch (error) {
    // Affichage du message d'erreur
    alert(error);
} 
    
    restart = confirm("Voulez-vous refaire un calcul ?");
} while (restart);
    
    alert('Fin du programme.');

        