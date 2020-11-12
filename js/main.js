//on renprend les infos du css / création des objets

let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteD = new Raquette($("#droite"));
let raquetteG = new Raquette($("#gauche"));

setInterval(function(){
    balle.bouger();

    raquetteG.bouger();
    
    raquetteD.bouger();
    console.log(balle)
}, 10);
