//Création objet Balle
class Balle
{
    constructor($element)
    {

        this.$element = $element;
        this.largeur = $element.width();
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.vitesseX = 2;

        /**
         *
         * @type {number}
         */
        this.vitesseY = 0.6;

        /**
         *
         * @type {number}
         */
        this.vitesseD = 1;

        /**
         *
         * @type {number}
         */
        this.vitesse = this.vitesseD;

        /**
         *
         * @type {number}
         */
        this.vitesseMax = 7;

        /**
         *
         * @type {number}
         */
        this.balleRayon = 20;

        /**
         *
         * @type {number}
         */
        this.angle = Math.random()*360 * Math.PI / 180;

    }

    /**
     *
     * @returns {*}
     */
    get bas()
    {
        return this.haut + this.largeur;
    }

    /**
     *
     * @param value
     */
    set bas(value)
    {
        this.haut = value - this.balleRayon;
    }

    /**
     *
     * @returns {*}
     */
    get droite()
    {
        return this.gauche + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value)
    {
        this.gauche = value - this.balleRayon;
    }

    //Mouvement de la balle
    bouger()
    {
        this.gauche += Math.cos(this.angle) * this.vitesseX;
        this.haut += Math.sin(this.angle) * this.vitesseY;
        
        //Fonctions annexes


        this.limite();
        this.majHTML();
    }


    limite()
    {
        // On detecte les bords
        //Droite
        if(this.droite > terrain.largeur)
        {
            this.recentrer();
            terrain.tiltEchecD();
        }
        
        //Bas
        if(this.bas > terrain.hauteur)
        {
            this.vitesseY *= -1;
            this.bas = terrain.hauteur;
            terrain.tiltBas();
        }
        //Haut
        if (this.haut <= 0)
        {
            this.vitesseY *= -1;
            this.haut = 0;
            terrain.tiltHaut();
        }
        //Gauche
        if (this.gauche <= 0)
        {
            terrain.tiltEchecG();
            this.recentrer();
        }

        this.rebond();
        this.majHTML();
    }

    rebond()
    {
        //DROITE
        if (this.droite > raquetteD.gauche) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteD.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteD.bas) {    //et si la balle est plus haute que le bas de la raquette
                    raquetteD.tiltRaquette();       //tilt css de la raquette droite
                    this.vitesseX *= -1;
                    this.acceleration();            //la balle accelere a chaque raquette
                }
            }
        }

        //GAUCHE
        if (this.gauche < raquetteG.droite) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteG.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteG.bas) {    // et si la balle est plus haute que le bas de la raquette
                    raquetteG.tiltRaquette();       //tilt css de la raquette gauche
                    this.vitesseX *= -1;
                    this.acceleration();             //la balle accelere a chaque raquette
                }
            }
        }
    }

    recentrer()
    {
        this.haut = terrain.hauteur/2      //au milieu
        this.gauche = terrain.largeur/2
    }

    //acceleration de la balle quand elle touche les raquettes
    acceleration()
    {
        if (Math.abs(this.vitesseX) < this.vitesseMax)
        {
            this.vitesseX *= 1.1;
            console.log(Math.abs(this.vitesseX));
        }
        /**
        else
        {
            this.vitesseX = this.vitesseMax;
        }
         */
    }
    //Update HTML
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }

}
