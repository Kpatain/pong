class Son{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
        //sounds
        createjs.Sound.registerSound("sound/jecodeaveclecul.mp3", "jecodeaveclecul");
        createjs.Sound.registerSound("sound/discord-call-sound.mp3", "discord-call-sound");
        createjs.Sound.registerSound("vocaroo_s04cqgr6wv7c.mp3", "vocaroo_s04cqgr6wv7c");


        //createjs.Sound.registerSound("sound/pong.mp3", "pong");
    }
    /**
     * Joue une note de piano aléatoire
     */
    playNote(){
        let notes=["jecodeaveclecul", "discord-call-sound","vocaroo_s04cqgr6wv7c"];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);
    }
    /**
     * Joue plusieurs notes ce qui produit un truc assez pété
     */
    fausseNote(){
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
    }
}