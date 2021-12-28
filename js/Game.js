class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
    
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
  
    start() {
      form = new Form();
      form.display();
      player = new Player();
      playerCount = player.getCount();
      red = createSprite(width / 2 - 100, height -200);
      red.addImage("car1", redplayer);
      red.scale = 0.5;

    blue = createSprite(width / 2 + 100, height - 200);
    blue.addImage("car2", blueplayer);
    blue.scale = 0.7;

    cars = [red, blue];
    }

    play() {
        form.hide();
    
        Player.getPlayersInfo();
    
        if (allPlayers !== undefined) {
            image(court, 0, 0, width, height+20);
    
          drawSprites();
        }
      }
  }