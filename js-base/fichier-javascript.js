//  ********************************La variable var************************************************************************************** -->
    
        // On déclare la variable monPrenom
        var monPrenom; 

        // On dit ici qu'on assigne la valeur 'Saufiane' à la variable monPrenom
        monPrenom = 'Saufiane';

        // Ce sont bien 2 variables différentes
        var monPrenom
        var MONPRENOM

        // Exemple  ici en nommant plusieurs variables qui sont les caractéristiques d'un utilisateur.
        // Déclaration des variables

        var userFirstname;
        var userLastname;
        var userEmail;

        // Affectation de valeurs à chacune des variables

        userFirstname ='Saufiane';
        userLastname = 'Cherief';
        userEmail = 'saufiane.c@gmail.com';

        var mon_prenom; // under_score
        var monPrenom; // camelCase

        

    //  ********************************La constante const************************************************************************************** -->

    
           
        const TAUX_TVA = 20;
        // on utilise ici le mot-clé const pour déclarer notre constante
        // elle est alors réutilisable dans tout notre code.
        // exemple ici sur le calcul de la TVA
        // on déclare d’abord les variables dont on va avoir besoin
        var montantHT;
        var montantTVA;
        montantHT = 100;
        // nous pouvons utiliser ici notre constante pour calculer le taux montant de la TVA
        montantTVA = montantHT * TAUX_TVA / 100;
        document.write(montantTVA); // affichera 20
        
    
//  ********************************Les tableaux (array)************************************************************************************** -->
        
        
        // La syntaxe longue

        var prenoms = new Array();
        // la variable prenoms est maintenant déclarée comme un tableau
        prenoms[0] = `Christian`;
        prenoms[1] = `Aurélien`;
        prenoms[2] = `Kévin`;
        prenoms[3] = `Zakaria`;
        document.write(prenoms[1]); // affichera Aurélien

        // la syntaxe courte

        var prenoms = [];
        // en ajoutant les crochets, on indique que la variable prenoms est un tableau
        prenoms = ['Christian', 'Aurélien', 'Kevin', 'Zakaria'];
        // On assigne les valeurs à l’intérieur du tableau
        // Notez que cette syntaxe ne nécessite pas d’index,
        // automatiquement la première valeur est assigné à l’index 0
        document.write(prenoms[3]); // affichera Zakaria
    

//  ********************************La concaténation************************************************************************************** -->

    
        /*
        Affichage de deux paragraphes directement dans la page HTML.
        Les chaînes de caractères sont concaténées avec le +
        */
        var prenom = `Mikael Jordan`;
        document.write("<p>Hello, je m'appelle " + prenom + `,et toi ? </p>`);
        // affichera dans un paragraphe <p>Hello, je m’appelle Mikael Jordan, et toi ?</p>
        /* Remarquez que l’on utilise des guillemets doubles ou simples pour englober une chaîne
        de caractère alors qu’une variable est juste appelée par son nom, l’opérateur + sert ici à
        concaténer, c’est à dire à assembler 2 chaînes.
        */
       
        //***************************************Caractère d'échappement**************************************************************************** */
       var comment = `J\’ai retrouvé mon chien qui s\’était égaré.` ;
       var reply = "Heureusement que tu as retrouvé \"Doogy\" c’est super !";
       /*
       Le caractère d’échappement \ placé juste avant le guillemet permet de dire que le
       caractère suivant n’est pas le caractère de fermeture de la chaîne. On dit qu’on échappe
       un caractère.
       */
    //   ****************************************Variables & transformations********************************************************************

        var maChaine = `Ceci est une chaîne de caractère` ;
        var nombre = 20; // ceci est une variable de type nombre
        var nombre = "20"; // ceci est une variable de type chaîne de caractère

        console.log(3 + 2); // affichera 5 (type number)
        console.log("3 + 2"); // affichera la chaîne de caractère 3+2 (type string)
        console.log("3" + "2"); // affichera la chaîne de caractère 32 (type string)
        console.log (parseInt("3")+ parseInt("2")); // affichera 5 (type number)
// Ici on a ici utilisé la fonction parseInt() qui transforme une chaîne de caractère en nombre
//et  javascript peut effectuer une addition.

// *********************************************L'objet Date()**************************************************************************
       

        // Objectif : afficher une date en Français
var dateAnniversaire = new Date("1976-11-02T08:30:00") ;
// 1 - je déclare une variable jourEnFrançais de type tableau
// (pour l'exemple avec la syntaxe courte)
var joursenFrancais = [
'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
];
// 2 je déclare une variable moisEnFrancais de type tableau
// (pour l'exemple la syntaxe longue)
var moisEnFrancais = new Array();
moisEnFrancais[0] = 'Janvier';
moisEnFrancais[1] = 'Février';
moisEnFrancais[2] = 'Mars';
moisEnFrancais[3] = 'Avril';
moisEnFrancais[4] = 'Mai';
moisEnFrancais[5] = 'Juin';
moisEnFrancais[6] = 'Juillet';
moisEnFrancais[7] = 'Août';
moisEnFrancais[8] = 'Septembre';
moisEnFrancais[9] = 'Octobre';
moisEnFrancais[10] = 'Novembre';
moisEnFrancais[11] = 'Décembre';
document.write('Je suis né le ' + joursEnFrancais[dateAnniversaire.getDay()] + ' ');
document.write(dateAnniversaire.getDate() + ' ');
document.write(moisEnFrancais[dateAnniversaire.getMonth()] + ' ');
document.write(dateAnniversaire.getFullYear() + ' ');
document.write('à ' + dateAnniversaire.getHours() + ':');
document.write('à ' + dateAnniversaire.getMinutes() + '');
document.write('<h2>Whao il est super jeune le prof de Dev !</h2>');

// On crée une variable age qui stocke la saisie de l'utilisateur
var age = parseInt(window.prompt('Quel âge avez-vous ?'));
// si l'utilisateur a 18ans ou plus alors on lui affiche un message "Vous êtes majeur"
if (age >= 18) {
alert('Vous êtes majeur');
}
// sinon on lui affiche un message "Vous êtes mineur"
else {
alert('Vous êtes mineur');
}
// pour exemple, ci-dessous le même code conditionnel avec la syntaxe ternaire
// (age>=18) ? alert('Vous êtes majeur') : alert('vous êtes mineur');

/*
Utilisation de ELSE IF et de son alternative SWITCH en cas de conditions multiples.
*/
// Nous commençons par déclarer 2 variables d'entrée (color1, color2)
// et 1 tableau result contenant les résultats possibles
var color1;
var color2;
var result = ['violet', 'orange', 'vert'];
color1 = window.prompt('Choisissez une couleur primaire (rouge, bleu, ou jaune)');
color2 = window.prompt('Choisissez une couleur de mélange (rouge, bleu, ou jaune)');
// si on mélange les couleurs bleu et rouge
if ((color1=='rouge' && color2=='bleu') || (color1=='bleu' && color2=='rouge')) {
alert('En mélangeant du rouge et du bleu, vous obtenez du ' + result[0]);
}
// sinon si on mélange les couleurs rouge et jaune
else if ((color1=='rouge' && color2=='jaune') || (color1=='jaune' && color2=='rouge')) {
alert('En mélangeant du rouge et du jaune, vous obtenez du ' + result[1]);
}
// sinon si on mélange les couleur bleu et jaune
else if ((color1=='bleu' && color2=='jaune') || (color1=='jaune' && color2=='bleu')) {
alert('En mélangeant du jaune et du bleu, vous obtenez du ' + result[2]);
}
// sinon
else {
alert('vous n\'avez pas renseigné une couleur acceptée');
}

// Les opérateurs de comparaison :
// a == b Vérifie l’égalité de valeur
// a===b Vérifie la stricte égalité (valeur et type)
// a<b Vérifie que a est inférieur à b
// a<=b Vérifie que a est inférieur ou égal à b
// a>b Vérifie que a est supérieur à b
// a>=b Vérifie que a est supérieur ou égal à b
// a!=b Vérifie que a est différent de b
// a!==b Vérifie que a est différent de b en valeur et en type
// Si besoin, les opérateurs logique ET et OU permettent de combiner plusieurs
// comparaisons ensemble :
// && ET
// || OU


switch (variableATester) {
    case 1: // signifie : dans le cas où variableATester == 1
    // Code à exécuter si la condition est vérifiée;
    break; // le break permet de sortir  du switch
    case 2: // signifie : dans le cas où variableATester == 2
    // Code à exécuter si la condition est vérifiée;
    break;
    case 3: // signifie : dans le cas où variableATester == 3
    // Code à exécuter si la condition est vérifiée;
    break;
    default: // (facultatif) signifie : dans tous les autres cas
    // Code à exécuter si la condition est vérifiée;
    break;
    }

    // Écrire100 fois “je kiff le javascript” et afficher les numéros de lignes /
for (var i = 1; i <= 100; i++){
    console.log(i + ' je kiff le javascript');
    }
    // L’initialisation : i vaut 1 (je commence à 1)
    // La condition : le code s’exécutera tant que la valeur de i ne sera pas égale à 100
    // L’incrémentation : ici i++ signifie i=i+1 (on incrémente de 1 la valeur de i à chaque tour de boucle)
    var blogCategories = ['javascript', 'php', 'mySql','html', 'css'];
    // On souhaite afficher les données contenues dans ce tableau, en lettres majuscules.
    for (var i=0; i<5; i++) {
    console.log( blogCategories[i] .toUpperCase());
    }
    /*
    Affichera :
    JAVASCRIPT
    PHP
    MYSQL
    HTML
    CSS
    */

   var blogCategories = ['javascript', 'php', 'mySql','html', 'css'];
   var nbIndex = blogCategories.length;
   console.log(blogCategories.length);
   // affichera 5

var blogCategories = ['javascript', 'php', 'mySql','html', 'css'];
var nombreIndex = blogCategories.length ;
// nombreIndex vaut 5 (puisqu’il y a 5 entrées dans le tabelau)
for (var i=0; i<nombreIndex; i++) {
console.log(blogCategories[i].toUpperCase());
// On se sert ici de la méthode .toUpperCase() pour transformer les données en majuscules.
}
/*
Affichera dans la console :
JAVASCRIPT
PHP
MYSQL
HTML
CSS
*/

// Tant que l’utilisateur ne rentre pas la couleur rouge OU ‘bleu OU jaune, on lui redemande son
// choix
var color;
var color = window.prompt('Veuillez choisir une couleur primaire (rouge, bleu, jaune)');
while (! ( ( color == 'bleu') || (color == 'rouge') || (color == 'jaune ') ) ) {
color=window.prompt('Veuillez choisir une couleur primaire (rouge, bleu, jaune)');
}
// pour vérifier la condition, on utilise ici les opérateur ! (différent de), || (ou) et == (opérateur
// d’égalité)
alert('vous avez choisi la couleur : ' + color);
// Si l’utilisateur a bien renseignée la couleur rouge OU bleu OU jaune, on lui affiche un message


// ***************************************Ajouter élement avec push()*********************************************************************************
// On déclare le tableau avec les crochets puis on assigne les valeurs à l’intérieur du tableau
var blogCategories = ['Javascript', 'Php', 'Mysql'];
// on ajoute des valeurs à la fin du tableau avec .push()
blogCategories.push('HTML');
blogCategories.push('CSS');
console.log(blogCategories);
// retourne [‘Javascript’, ‘Php’, ‘Mysql’, ‘HTML’, ‘CSS’]
/*
Nous pouvons aussi ajouter plusieurs valeurs avec un push()
par exemple :
*/
console.log(blogCategories.push('Symfony','Laravel','Cakphp'));
// retourne 8, soit le nombre d’entrées du nouveau tableau
console.log(blogCategories);
// retourne [‘Javascript’, ‘Php’, ‘Mysql’, ‘HTML’, ‘CSS’, ‘Symfony’, ‘Laravel’, ‘CakePhp’


// *****************************************méthode pop() & shift() pour supprimer******************************************************
// On déclare le tableau avec les crochets puis on assigne les valeurs à l’intérieur du tableau
var blogCategories = ['Javascript', 'Php', 'Mysql'];
blogCategories.pop(); // on supprime le dernier élément du tableau avec .pop()
console.log(blogCategories); // retourne [‘Javascript’, ‘Php’]
blogCategories.shift(); // on supprime le premier élément du tableau avec .pop()
console.log(blogCategories); // retourne [‘Php’]

// ******************************************Utiliser les functions*******************************************************************

// Comment utiliser les fonctions ?
// Syntaxe d’une fonction :
function nomDeMaFonction() {
// Code à exécuter
}
// Votre fonction peut contenir 1 ou plusieurs paramètres. Ils se placent dans les
// parenthèses // et sont séparés par des virgules
function nomDeMaFonction(paramètre1, paramètres2, … ) {
// Code à exécuter
}
// *****************************************function direBonjour*****************************************************
// Nous déclarons une fonction que l’on décide de nommer direBonjour. Ici elle ne prend aucun paramètre.
function direBonjour() {
        var date = new Date();
        alert('HELLO ! Nous sommes le ' + date.getDay() + '/ ' + date.getMonth() + '/ ' +
        date.getFullYear());
        }
        // Puis on peut maintenant appeler simplement la fonction direBonjour() quand on le souhaite
        direBonjour(); // affichera la boîte alert avec le message

// ******************************************function direBonjour avec prenom********************************************************************
        // On déclare la même fonction à laquelle nous passons en paramètre une variable prénom.
function direBonjour(prenom) {
        var date = new Date();
        alert('HELLO ' + prenom + ' ! Nous sommes le ' + date.getDay() + '/ ' +
        date.getMonth() + '/ ' + date.getFullYear());
        }
        direBonjour ('Saufiane');
        // affichera la boîte alert avec le message contenant également le prénom passé ici en paramètre

// ******************************************function qui calcule et retourne le produit de 2 nombres**************************************************************************************

// Nous passons en paramètre 2 variables a et b.
        function multiplier(a,b) {
        var resultat = a*b;
        return resultat;
        }
        multiplier (3,5); // retournera alors la valeur 15 dans la console
        // vous pouvez alors utiliser cette valeur en la récupérant dans une variable pour l’afficher par exemple
        // var monResultat = multiplier (3,5);
        // alert (monResultat);

