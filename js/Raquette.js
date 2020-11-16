
//Création objet this
class Raquette
{
    constructor($element)
    {
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseY = 1;
        this.hauteur = $element.height();

        this.direction = 0;
    }

    get bas()
    {
        return this.haut+this.hauteur;
    }

    bouger()
    {
        //Mouvement raquette
        this.haut += this.vitesseY * this.direction;
        this.limite();
        this.majHTML();
    }

    monter()
    {
        this.direction = -1;
    }

    descendre()
    {
        this.direction = 1;
    }

    arret()
    {
        this.direction = 0;
    }

    limite()
    {
        //Colision raquette
        //Bas
        if(this.bas > terrain.hauteur){
            this.vitesseY *= -1;
            this.haut = terrain.hauteur - this.hauteur;
        }
        //Haut
        if (this.haut < 0){
            this.vitesseY *= -1;
            this.haut = 0;
        }

    }


    majHTML()
    {
        this.$element.css("top", this.haut);
    }

}