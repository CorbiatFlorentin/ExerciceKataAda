function getLatinCharacterList(text) {
 return text.split('');
};
 // le .split() sert à casser le mot en chacun des caractéres qui le compose.
// on retourne le texte rentré (Hello Wolrd) en séparant chacune des lettres.

const text1 = "Hello World"; 
const characterList = getLatinCharacterList(text1);
console.log(characterList);

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
// Etape 2 : Faire correspondre une lettre latine avec le dictionnaire en morse.
function translateLatinCharacter(char) {
  const upperChar = char.toUpperCase(); // s'assure que le paramétre char soit en maj pour correspondre au dico.
  if(latinToMorse.hasOwnProperty(upperChar)) { 
    
    // se refere au dico en vérifiant si le char stocké dans upperCase renvoie true si 
    // cela est dans le dico sinon renvoie false et donc return 'Caractère non pris en charge'.
    
    return latinToMorse[upperChar];
  } else {
    return 'Caractère non pris en charge';
  }
}
const text2 = "A";
const translate = translateLatinCharacter(text1); 
console.log(translate);



function encode(text) {
    // on fait une variable pour stocker le résultat
    let morseCode = "";
    // ici on parcourt tous les caractères de la chaîne
    for (let i = 0; i < text.length; i++) {
    // on appelle translateLatinCharacter pour traduire le caractère en morse
        const morseChar = translateLatinCharacter(text[i]);
    // on ajoute le code Morse du char traduit à la fin 
        morseCode += morseChar + " ";
    }// on retourne le code en supprimant l'espace en trop à la fin 
    return morseCode.trim();
}

const text3 = "Hello";
const morseEncoded = encode(text3);
console.log(morseEncoded);


const morseToLatin = {
    '-': "T", '--': "M", '---': "O", '--.': "G", '--.-': "Q", '--..': "Z", '-.': "N", '-.-': "K", '-.--': "Y",
    '-.-.': "C", '-..': "D", '-..-': "X", '-...': "B", '.': "E", '.-': "A", '.--': "W", '.---': "J", '.--.': "P",
    '.-.': "R", '.-..': "L", '..': "I", '..-': "U", '..-.': "F", '...': "S", '...-': "V", '....': "H"
};

function getMorseCharacterList(text) {
    return text.split(' '); // Sépare les caractères morse en fonction des espaces pour former une liste
}

function translateMorseCharacter(char) {
    if (morseToLatin.hasOwnProperty(char)) { // Vérifie si le caractère morse est présent dans le dictionnaire
        return morseToLatin[char]; // Retourne la lettre correspondante
    } else {
        return 'Caractère non pris en charge';
    }
}

function decodeMorse(text) {
    const morseCharacterList = getMorseCharacterList(text); // Obtient une liste de caractères morse
    let latinText = ""; // Initialise la variable pour stocker le texte latin décodé
    for (let i = 0; i < morseCharacterList.length; i++) {
        const latinChar = translateMorseCharacter(morseCharacterList[i]); // Traduit chaque caractère morse en latin
        latinText += latinChar; // Ajoute le caractère latin à la chaîne résultante
    }
    return latinText;
}

// Test de la fonction decodeMorse avec une chaîne de morse
const morseText = "... --- ... / .- .-.. .-..";
const decodedText = decodeMorse(morseText);
console.log(decodedText); // Affiche "SOS ALL"


