
//création de la fonction

function premiere_fonction(){
    console.log("je suis dans mon fonction");
}


function calcul(){
    let nombre = parseInt(prompt('Donnez une valeur numérique'));
    console.log("Valeur : " + nombre + "*2 = " + (nombre*2));
    return nombre*2;
}

function infomessage(){
    //BIEN SPECIFIER LE MOT CLE QUAND ON CREE UNE VARIABLE LOCALE
    var message = "ici la variable locale";
    console.log("Dans la fonction message = " + message);
    return true;
}

function test(a,b,c){
    console.log("paramètre 1 : " + a);
    console.log(arguments);
    console.log(arguments[1]);
}

function information(arg1,arg2,arg3,arg4){
    // console.log(typeof arg3);
    // console.log(typeof arg2);
    // console.log(typeof arg1);
    if(typeof arg4 === 'undefined'){
        console.log("Arg 3 n'a pas été défini")
    }
}

function verif_type(arg){
    switch(typeof arg){
        case 'undefined' :
            console.log('Variable non définie');
            break;
        case 'number' :
            console.log('Variable numérique');
            break;
        case 'string' :
            console.log('Variable chaine de caractères');
            break;
        case 'boolean' :
            console.log('Variable de type booléen');
            break;
        case 'function' :
            console.log('C\'est une fonction');
            break;
        default :
            console.log('Variable non reconnue');
    }
}

function retour(){
    return true; //des qu'il rencontre "return" la fonction s'arrète
    console.log('blablabla');
    return false;
}

function somme_notes(){
    const STOP = -1;
    let somme = 0;
    let note;
    console.log("Etape 0:",STOP,somme,note);

    do{
        note = parseInt(prompt('Donnez une valeur numérique'));
        if(note >= 0 && note <=20) {
            somme = somme + note;
            console.log("Etape 1:",STOP,somme,note);
        } else if (note == STOP){
                console.log("Fin de la saisie");
                console.log("Etape 2:",STOP,somme,note);
            } else {
                console.log("La valeur saisie n\'est pas valide");
                console.log("Etape 3:",STOP,somme,note);
        }
            
        
    }while(note != STOP);
    console.log("Etape 4:",STOP,somme,note);
    return somme;
}


