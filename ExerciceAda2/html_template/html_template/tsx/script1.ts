function askName() : string  {
  const greeting: string = '👋 Bonjour';
  const name: string | null = prompt(greeting + 'Quel est votre nom ?');
  if (name === null) {
    throw new Error('Nom non saisi');
  }
  return name; 
}

function askBirthYear1(): number {
    const birthYearStr: string | null = prompt('Quelle est votre année de naissance?');
    if (birthYearStr === null) {
        throw new Error('Année de naissance non saisie'); // Gérer le cas où l'utilisateur annule la saisie
    }
    const birthYear: number = parseInt(birthYearStr);
    const currentYear: number = new Date().getFullYear();
    const age: number = currentYear - birthYear;
    return age; 
}

try {
    const userName : string | null  = askName();
    const userAge : number = askBirthYear1();

    const greetingMessage: string = `<h2>${userName}, bienvenue sur notre page!</h2>`;
    document.body.innerHTML += greetingMessage; // Ajouter le message de bienvenue directement sur la page HTML

    const ageMessage: string = `<h3>Vous avez ${userAge} ans.</h3>`;
    document.body.innerHTML += ageMessage; // Ajouter le message d'âge directement en h3 sur la page HTML
} catch (error) {
    console.error(error.message); 

}
