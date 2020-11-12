//Création objet Terrain
class Terrain{
    constructor($element)
    {
        this.$element = $element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }

    tilt(){
        //on met la Classe css
        this.$element.addClass("tilt");
        let ici = this;
        
        //on retire la Classe css
        setTimeout(
            function()
            {
                ici.$element.removeClass("tilt");
            },300
        );
    }
    
}
