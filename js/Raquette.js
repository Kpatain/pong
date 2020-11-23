
//Création objet this
class Raquette
{
    constructor($element)
    {
        this.$element = $element;

        /**
         *
         * @type {number}
         */
        this.haut = parseInt($element.css("top"));

        /**
         *
         * @type {number}
         */
        this.gauche = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.vitesseY = 0.5;
        this.hauteur = $element.height();

        this.largeur = $element.width();

        this.direction = 0;
    }

    get bas()
    {
        return this.haut+this.hauteur;
    }

    set bas(value)
    {
        this.haut = value - this.hauteur;
    }

    get droite()
    {
        return this.gauche+this.largeur;
    }

    set droite(value)
    {
        this.gauche = value - this.largeur;
    }

    bouger()
    {
        //Mouvement raquette
        this.haut += this.vitesseY * this.direction;
        this.limite();
        this.majHTML();
    }

    //Liste des fonctions de mouvement
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

    /**
     * evite que les raquettes sortent du terrain
     */
    limite()
    {
        //Colision raquette
        if(this.bas > terrain.hauteur)
        {
            this.bas = terrain.hauteur;
        }

        if (this.haut < 0)
        {
            this.haut = 0;
        }
    }

    //update
    majHTML()
    {
        this.$element.css("top", this.haut);
    }

}