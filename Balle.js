//Création objet Balle
class Balle{
    constructor($element){
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseX = 2;
        this.vitesseY = 0.6;
        this.balleRayon = 20;
        this.angle = Math.random()*360 * Math.PI / 180
    }

    //Update HTML
    majHTML()
    {
        this.$element.css("left", balle.gauche);
        this.$element.css("top", balle.haut);
    }
}
