function guessNumber() {
    return parseInt(prompt('Entrez un nombre') || '0');
}
//On explicite le type de retour de la fonction avec :number et le || 0 sert à fournir une valeur par défaut
function didIWin(guessNumber) {
    if (guessNumber === 22) {
        return 'Bravo ! Vous avez deviné le nombre.';
    }
    else if (guessNumber < 22 && guessNumber >= minRange) {
        minRange = guessNumber;
        return 'Plus grand';
    }
    else if (guessNumber > 22 && guessNumber <= maxRange) {
        maxRange = guessNumber;
        return 'Plus petit';
    }
    else {
        return 'Le nombre proposé nse se situe pas dans la range autorisé (0 - 50).';
    }
}
// pareil que au dessus avec : number et pour didIwin on attend une réponse de retour qui sera une string
//function gamePlay(): void {
//    let givenNumber: number = guessNumber();
//   let result: string = didIWin(givenNumber);
//   alert(result);
//}
//On ne spécifie pas explicitement le type de retour mais on lui donne void pour quand même le type
// Etape 5/6 : on a rajouté dans didIWin au niveau des else if les conditions de range pour comparer le nombre mini et maxi à la valeur rentré dans le prompt
var minRange = 0;
var maxRange = 50;
var attempts = 0;
// On déclare l'ensemble des valeurs min/max et aussi le nombre d'essai initiaux
function gamePlay() {
    while (true) {
        var givenNumber = guessNumber();
        attempts++;
        var result = didIWin(givenNumber);
        if (result === 'Bravo ! Vous avez deviné le nombre.') {
            alert('Bravo ! Vous avez deviné le nombre.');
            break;
        }
        else {
            alert("".concat(result, ". Tentatives en cours : ").concat(attempts));
        }
    }
}
gamePlay();
