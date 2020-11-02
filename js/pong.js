

let largeur=$("#balle").width();
let gauche =parseInt($("#balle").css("left"));
let haut =parseInt($("#balle").css("top"));
alert(largeur);

setInterval(function(){
    gauche = gauche+1;
    haut=haut+0.5;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
}, 10);