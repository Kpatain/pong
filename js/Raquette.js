
//Création objet raquette
class Raquette{
    constructor($element){
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseY = 1;
        this.hauteur = $element.height();
    }
}