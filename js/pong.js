//on renprend les infos du css
let largeur=$("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));



//Création objet Terrain
class Terrain{
    constructor($element){
        this.$element = $element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}

//Création objet Balle
class Balle{
    constructor($element){
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseX = 2
        this.vitesseY = 0.5
    }

//On reprend le x et y de la balle depuis le css
    majHTML(){
        this.$element.css("left", balle.gauche);
        this.$element.css("top", balle.haut);
    }
}


let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));

setInterval(function(){
    //Mouvement de la balle

    balle.gauche = balle.gauche + balle.vitesseX;
    balle.haut= balle.haut + balle.vitesseY;
    
    // On detecte les bords

    //Droite
    if(balle.gauche>terrain.largeur){
        balle.gauche = terrain.largeur;
        balle.vitesseX *= -1
    }
    //Bas
    if(balle.haut>terrain.hauteur){
        balle.vitesseY *= -1
        balle.haut = terrain.hauteur
    }
    //Haut
    if (balle.haut <= 0){
        balle.vitesseY *= -1
        balle.haut = 0
    }
    //Gauche
    if (balle.gauche <= 0){
        balle.vitesseX *= -1
        balle.gauche = 0
    }
    balle.majHTML();

    //console.log(balle.haut)

}, 10);
