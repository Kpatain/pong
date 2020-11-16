//on renprend les infos du css / création des objets

let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteD = new Raquette($("#droite"));
let raquetteG = new Raquette($("#gauche"));

setInterval(function()
{
    balle.bouger();

    raquetteG.bouger();
    raquetteD.bouger();

    //balle.rebond();

}, 10);


//Key listener
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if (event.key === "a" || envent.key === "A")
    {
        raquetteG.monter();
    }

    if (event.key === "q" || envent.key === "Q")
    {
        raquetteG.descendre();
    }

    if (event.key === "p" || envent.key === "P")
    {
        raquetteD.monter();
    }

    if (event.key === "m" || envent.key === "M")
    {
        raquetteD.descendre();
    }

    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    if (event.key === "a" || envent.key === "A")
    {
        raquetteG.arret();
    }

    if (event.key === "q" || envent.key === "Q")
    {
        raquetteG.arret();
    }

    if (event.key === "p" || envent.key === "P")
    {
        raquetteD.arret();
    }

    if (event.key === "m" || envent.key === "M")
    {
        raquetteD.arret();
    }

    event.preventDefault();
}, true);

