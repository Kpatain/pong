
//Création objet this
class Raquette{
    constructor($element){
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseY = 1;
        this.hauteur = $element.height();
    }

    bouger(){
        //Mouvement raquette
        this.haut += this.vitesseY;
        this.limite();
        this.majHTML();
    }

    limite(){
        //Colision raquette
        //Bas
        if(this.haut + this.hauteur > terrain.hauteur){
            this.vitesseY *= -1;
            this.haut = terrain.hauteur - this.hauteur;
        }
        //Haut
        if (this.haut < 0){
            this.vitesseY *= -1;
            this.haut = 0;
        }

    }

    majHTML(){
        this.$element.css("top", this.haut);
    }
}