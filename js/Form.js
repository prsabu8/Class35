class Form {
    constructor() {
        this.input  = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(560,120);

        /*var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');*/

        this.input.position(560,300);
        this.button.position(600,350);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            
            PlayerCount+=1;
            player.update();
            player.updateCount(PlayerCount);
            
            this.greeting.html("Hello! " + player.name);
            this.greeting.position(560,300);
        });
    }
}