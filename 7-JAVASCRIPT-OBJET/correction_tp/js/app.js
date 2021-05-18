

/*
let precedente = -1;
let img;
let imgp;
let attente = 0;

function cachephotos(){
    img.style.display = "none";
    imgp.style.display = "none";
    attente = 0;
}

document.querySelectorAll("div.cellule").forEach(function(elm,index){
    elm.addEventListener("click",function(e){
       console.log("ok");
      if(attente != 1 && this.firstElementChild.dataset.affichage !="true"){ 
            console.log(precedente);
            //FIRSTELMENTCHILD = ELEMENT ENFANT EN EVITANT LES NOEUDS TEXTES VIDES
            img = this.firstElementChild;
            console.log(img);
            img.style.display = "block";
            if(precedente<0){
                precedente = (this.id).slice(1,3);
                console.log("valeur precedente : " + precedente);
            } else {
                imgp = document.querySelector("div#n"+precedente+" img");
                console.log(imgp);
                console.log(imgp.src,img.src);
                if(imgp.src == img.src) {
                    console.log("image trouvée");
                    img.dataset.affichage = true;
                    imgp.dataset.affichage = true;
                } else {
                    // Attente permet d'attendre que la fonction cachephotos se realise
                    attente = 1;
                    setTimeout('cachephotos()',1000);
                }
                precedente = -1;
            }
        }
    })
});

// Cette fonction permet d'intervertir deux images en elles on lance le process 100 fois pour simuler un vrai comportement aléatoire
function initgame(){
    console.log("--START--");
    for(let i=1;i<=100;i++){
        //Math.random() donne une variable aleatoire entre 0 et 1 sortant *16   
        //Math ceil -> arrondi entier sup 
        const N1 = Math.ceil(16*Math.random());
        const N2 = Math.ceil(16*Math.random());
        // Recupère enfant
        let img1 = document.querySelector("div#n"+N1+" img");
        let img2 = document.querySelector("div#n"+N2+" img");
        //INVERSION DE img 1 vers img 2
        const SRC1 = img1.src;
        const SRC2 = img2.src;
        img1.src = SRC2;
        img2.src = SRC1;
        //console.log(i,N1,N2);
    }
}
*/


//ES6
class game {
    constructor(){
        this.precedente = -1;
        this.img;
        this.imgp;
        this.attente = 0;
        return this;
    }

    initgame(){
        console.log("--START--");
        for(let i=1;i<=100;i++){
            //Math.random() donne une variable aleatoire entre 0 et 1 sortant *16   
            //Math ceil -> arrondi entier sup 
            const N1 = Math.ceil(16*Math.random());
            const N2 = Math.ceil(16*Math.random());
            // Recupère enfant
            let img1 = document.querySelector("div#n"+N1+" img");
            let img2 = document.querySelector("div#n"+N2+" img");
            //INVERSION DE img 1 vers img 2
            const SRC1 = img1.src;
            const SRC2 = img2.src;
            img1.src = SRC2;
            img2.src = SRC1;
            console.log(i,N1,N2);
        }
        return this;
    }

    cachephotos(){
        console.log(this);
        this.img.style.display = "none";
        this.imgp.style.display = "none";
        this.attente = 0;
        return this;
    }
    resolution(){
        //THAT = this car on souhaite conserver une copie de this comme objet "GAME"
        const THAT = this;
        document.querySelectorAll("div.cellule").forEach(function(elm,index){

            elm.addEventListener("click",function(e){
             //A L'interieur de addeventlistener this = elm   
            if(THAT.attente != 1 && this.firstElementChild.dataset.affichage !="true"){ 
                    console.log(THAT.precedente);
                    //FIRSTELMENTCHILD = ELEMENT ENFANT EN EVITANT LES NOEUDS TEXTES VIDES
                    THAT.img = this.firstElementChild;
                    console.log(THAT.img);
                    THAT.img.style.display = "block";
                    if(THAT.precedente<0){
                        THAT.precedente = (this.id).slice(1,3);
                        console.log("valeur precedente : " + THAT.precedente);
                    } else {
                        THAT.imgp = document.querySelector("div#n"+THAT.precedente+" img");
                        console.log(THAT.imgp);
                        console.log(THAT.imgp.src,THAT.img.src);
                        if(THAT.imgp.src == THAT.img.src) {
                            console.log("image trouvée");
                            THAT.img.dataset.affichage = true;
                            THAT.imgp.dataset.affichage = true;
                        } else {
                            // Attente permet d'attendre que la fonction cachephotos se realise
                            THAT.attente = 1;
                             //POURQUOI CA , car settimeout s'execute dans un contexte globale en asynchrone on est obligé d'utiliser bind pour préciser le contexte de la fonction. 
                            window.setTimeout(THAT.cachephotos.bind(THAT),1000);
                            console.log("test");
                        }
                        THAT.precedente = -1;
                    }
                }
            })
        });
        return this;
    }
}