//on renprend les infos du css
let largeur=$("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquette = new Raquette($("#raquette"));




//Update HTML
majHTML()
{
    this.$element.css("left", raquette.gauche);
    this.$element.css("top", raquette.haut);
}


setInterval(function(){
    //Mouvement raquette
    raquette.haut += raquette.vitesseY;

    //Colision raquette
    //Bas
    if(raquette.haut + raquette.hauteur > terrain.hauteur){
        raquette.vitesseY *= -1;
        raquette.haut = terrain.hauteur + raquette.hauteur;
    }
    //Haut
    if (raquette.haut < 0){
        raquette.vitesseY *= -1;
        raquette.haut = 0;
    }

    //Mouvement de la balle
    balle.gauche += Math.cos(balle.angle) * balle.vitesseX;
    balle.haut += Math.sin(balle.angle) * balle.vitesseY;
    
    // On detecte les bords

    //Droite
    if(balle.gauche > terrain.largeur - balle.balleRayon){
        balle.gauche = terrain.largeur - balle.balleRayon;
        balle.vitesseX *= -1;
    }
    //Bas
    if(balle.haut > terrain.hauteur - balle.balleRayon){
        balle.vitesseY *= -1;
        balle.haut = terrain.hauteur - balle.balleRayon;
    }
    //Haut
    if (balle.haut < 0){
        balle.vitesseY *= -1;
        balle.haut = 0;
    }
    //Gauche
    if (balle.gauche < 0){
        balle.vitesseX *= -1;
        balle.gauche = 0;
    }
    balle.majHTML();


}, 10);
