// Étape 1: Demander le nom à l'utilisateur.ice et afficher un message de bienvenue
function askName() {
    var greeting = '👋 Bonjour '; // Message de bienvenue
    var name = prompt(greeting + 'Quel est votre nom ?'); // Demander le nom à l'utilisateur
    return name; // Retourner le nom saisi
}

// Étape 2: Demander l'année de naissance de l'utilisateur et calculer l'âge
function askBirthYear() {
    var birthYear = prompt('Quelle est votre année de naissance ?'); // Demander l'année de naissance
    var currentYear = new Date().getFullYear(); // Obtenir l'année actuelle
    var age = currentYear - birthYear; // Calculer l'âge en soustrayant l'année actuelle avec l'année de naissance 
    return age; // Retourner l'âge calculé
}

// Appel des fonctions pour les étapes 1 et 2
var userName = askName(); // on stock la fonction askName dans une variable 
var userAge = askBirthYear(); // on stock la fonction askBirthYear dans une variable 

// Affichage des messages sur la page HTML
var greetingMessage = '<h2>' + userName + ', bienvenue sur notre page!</h2>';
document.body.innerHTML += greetingMessage; // Ajouter le message de bienvenue directement sur lapage HTML

var ageMessage = '<h3>Vous avez ' + userAge + ' ans.</h3>';
document.body.innerHTML += ageMessage; // Ajouter le message d'âge directement en h3 sur la page HTML
