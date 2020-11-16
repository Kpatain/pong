//Création objet Balle
class Balle
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();

        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        this.vitesseX = 2;
        this.vitesseY = 0.6;

        this.balleRayon = 20;
        this.angle = Math.random()*360 * Math.PI / 180;
    }

    get bas()
    {
        return this.haut+this.largeur;
    }

    get droite()
    {
        return this.gauche+this.largeur;
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
            this.gauche = terrain.largeur - this.balleRayon;
            this.vitesseX *= -1;
        }
        
        //Bas
        if(this.bas > terrain.hauteur)
        {
            this.vitesseY *= -1;
            this.haut = terrain.hauteur - this.balleRayon;
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
            this.vitesseX *= -1;
            this.gauche = 0;
        }
        this.majHTML();
    }


    /***
    rebond()
    {
        if (this.haut)
    }
     */


    //Update HTML
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }

}
