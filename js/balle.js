//Création objet Balle
class Balle
{
    constructor($element)
    {
        this.$element = $element;

        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        this.vitesseX = 2;
        this.vitesseY = 0.6;

        this.balleRayon = 20;
        this.angle = Math.random()*360 * Math.PI / 180;
    }


    limite(oui,non)
    {
        // On detecte les bords
        //Droite
        if(this.gauche > terrain.largeur - this.balleRayon);
        {
            this.gauche = terrain.largeur - this.balleRayon;
            this.vitesseX *= -1;
        }
        //Bas
        if(this.haut > terrain.hauteur - this.balleRayon)
        {
            this.vitesseY *= -1;
            this.haut = terrain.hauteur - this.balleRayon;
            terrain.tilt();
        }
        //Haut
        if (this.haut < 0);
        {
            this.vitesseY *= -1;
            this.haut = 0;
            terrain.tilt();
        }
        //Gauche
        if (this.gauche < 0)
        {
            this.vitesseX *= -1;
            this.gauche = 0;
        }
        this.majHTML();
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

    //Update HTML
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }
}
