//on renprend les infos du css / création des objets
/**
 *
 * @type {Terrain}
 */
let terrain = new Terrain($("#terrain"));

/**
 *
 * @type {Balle}
 */
let balle = new Balle($("#balle"));

/**
 *
 * @type {Raquette}
 */
let raquetteD = new Raquette($("#droite"));

/**
 *
 * @type {Raquette}
 */
let raquetteG = new Raquette($("#gauche"));

/**
 *
 * @type {Joueur}
 */
let joueur0 = new Joueur($("#scoreg"));

/**
 *
 * @type {Joueur}
 */
let joueur1 = new Joueur($("#scored"));

/**
 *
 * @type {boolean}
 */
let demarrer = false;

let son = new Son();


setInterval(function(){
    if(demarrer)
    {
        balle.bouger();
        raquetteG.bouger();
        raquetteD.bouger();
    }
}, 10);

// $("#btn-jouer").on("mousedown", function (event) {
//     event.preventDefault(); //je ne vous explique pas pour l'instant à quoi ça sert c'est trop complexe
//     console.log("tu as appuyé sur $monBouton");
// });

$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    son.playNote("jecodeaveclecul");
    $("#ecran-debut").addClass("invisible");
});


//APPUIE
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {return}
    if (event.key === "a" || event.key === "A")
    {
        raquetteG.monter();
    }

    else if (event.key === "q" || event.key === "Q")
    {
        raquetteG.descendre();
    }

    else if (event.key === "p" || event.key === "P")
    {
        raquetteD.monter();
    }

    else if (event.key === "m" || event.key === "M")
    {
        raquetteD.descendre();
    }

    event.preventDefault();
}, true);

//RELACHE
window.addEventListener("keyup", function (event)
{
    if (event.defaultPrevented) {return}
    if (event.key === "a"
        || event.key === "A"
        || event.key === "q"
        || event.key === "Q")
    {
        raquetteG.arret();
    }

    else if (event.key === "q" || event.key === "Q")
    {
        raquetteG.arret();
    }

    if (event.key === "p"
        || event.key === "P"
        || event.key === "m"
        || event.key === "M")
    {
        raquetteD.arret();
    }

    event.preventDefault();
}, true);
