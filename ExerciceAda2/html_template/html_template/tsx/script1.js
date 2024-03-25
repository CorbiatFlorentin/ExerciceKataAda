function askName() {
    var greeting = '👋 Bonjour';
    var name = prompt(greeting + 'Quel est votre nom ?');
    if (name === null) {
        throw new Error('Nom non saisi');
    }
    return name;
}
function askBirthYear1() {
    var birthYearStr = prompt('Quelle est votre année de naissance?');
    if (birthYearStr === null) {
        throw new Error('Année de naissance non saisie'); // Gérer le cas où l'utilisateur annule la saisie
    }
    var birthYear = parseInt(birthYearStr);
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age;
}
try {
    var userName = askName();
    var userAge = askBirthYear1();
    var greetingMessage = "<h2>".concat(userName, ", bienvenue sur notre page!</h2>");
    document.body.innerHTML += greetingMessage; // Ajouter le message de bienvenue directement sur la page HTML
    var ageMessage = "<h3>Vous avez ".concat(userAge, " ans.</h3>");
    document.body.innerHTML += ageMessage; // Ajouter le message d'âge directement en h3 sur la page HTML
}
catch (error) {
    console.error(error.message);
}
