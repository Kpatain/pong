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
        return this.haut + this.largeur;
    }

    set bas(value)
    {
        this.haut = value - this.balleRayon;
    }

    get droite()
    {
        return this.gauche + this.largeur;
    }

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
            this.recentrer();
        }

        this.rebond();
        this.majHTML();
    }

    rebond()
    {
        //DROITE
        // Histoire de vous mettre sur la voie un petit bout de code pour savoir si ma balle touche la raquette gauche, à vous de définir où mettre ça et quoi faire dans ce cas là
        if (this.droite > raquetteD.gauche) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteD.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteD.bas) {    // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                    console.log(1)
                    // donc la balle va rebondir sur la raquette, à vous de jouer!
                }
            }
        }

        //GAUCHE
        // Histoire de vous mettre sur la voie un petit bout de code pour savoir si ma balle touche la raquette gauche, à vous de définir où mettre ça et quoi faire dans ce cas là
        if (this.gauche < raquetteG.droite) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteG.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteG.bas) {    // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                    console.log(2)
                    // donc la balle va rebondir sur la raquette, à vous de jouer!
                }
            }
        }
    }

    recentrer()
    {
        this.haut = terrain.hauteur/2
        this.gauche = terrain.largeur/2
    }
    //Update HTML
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }

}
