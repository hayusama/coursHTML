let chiffre2;
chiffre2 = 14;
//equivalent
let chiffre = 14; //NOMBRE
let virgule = 3.21; //FLOTTANT ATTENTION UTILISER "."
let chaine1 = "       Bonjour M2I, \"INFORMATIONS\"        "; //GUILLET OU QUOTE
let chaine2 = 'Au revoir';
let chaine3 = 'L\'histoire de la programmation'; //ANTISLASH EST UN CARACTERE D'ECHAPPEMENT
let boolean = true; //VRAI OU FAUX deux valeurs possibles
console.log("Chiffre =",chiffre," chiffre2 = ",chiffre2 ,"Réel = ",virgule,"chaine1 = ",
            chaine1,"chaine2 =",chaine2,"Boolean = ",boolean);


//TESTER OBJET DE TYPE NUMBER
console.log(Number.isInteger(chiffre),Number.isInteger(virgule));

//TESTER OBJET TYPE STRING (CHAINE DE CARACTERES)
console.log(chaine1);
console.log("Taille de ma chaine : ", chaine1.length);
console.log("Récuperer une lettre à un indice précis : ", chaine1.charAt(3))
console.log("Mettre en majuscule ", chaine1.toUpperCase());
console.log("Mettre en minuscule ", chaine1.toLowerCase());
console.log("Scinder une chaine :", chaine1.split(","));
console.log("Supprimer les espaces avant et apres : ", chaine1.trim());
let chainesansespace = chaine1.trim();
console.log(chainesansespace.concat(', ', chaine3)); //CONCATENATION (coller des chaines)

//CONCATENATION SPECIFIQUE
var prenom = "Jean";
var nom = "Dupond";
console.log("Vous vous appelez ", prenom," ", nom); //SPECIFIQUE A LA CONSOLE
console.log("Vous vous appelez " + prenom + " " + nom); //POUR AFFICHER LES CHOSES A L'ECRAN
document.write("Vous vous appelez " + prenom + " " + nom); //POUR AFFICHER A L'ECRAN [ANCIENNE METHODE]

let prenom2 = "Julie";
let nom2 = "Machu";
console.log(`Vous vous appelez ${prenom2} ${nom2}`);  //UTILISER LE"TICKS ARRIERE" CTRL+ALT+7

let x = 3;
if(!(x>10)){
 alert('ok');
} else {
    alert("non");
}