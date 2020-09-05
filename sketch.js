var database;
var GameState  = 0;
var PlayerCount = 0;
var form, player, game, allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
   game = new Game();
   game.getState();
   game.start();
  
}

function draw(){
  background("white");
  if (PlayerCount === 4) {
    game.update(1);
  }
   if (GameState === 1) {
     clear();
     game.play();
   }
  
}