var gameover6 = function(game){
  console.log("%cStarting gameover6", "color:white; background:red");
};
gameover6.prototype = {
    create: function(){
      game.add.sprite(0,0,'back');
      game.add.sprite(45,10,'gameover');
        var displayscore=localStorage.getItem("level6score");
      game.add.text(500,350,displayscore);
      game.add.text(400,350,"Score:");
      var refresh=game.add.sprite(380,500,'refresh');
var gohome=game.add.sprite(480,500,'home');
refresh.inputEnabled=true;
gohome.inputEnabled=true;
refresh.events.onInputDown.add(listener, this);
gohome.events.onInputDown.add(listener2, this);

function listener (argument) {
  score5=0;
      localStorage.setItem("level6score", score5);
this.game.stateTransition.to("level6");}

function listener2 (argument) {
  score5=0;
     localStorage.setItem("level6score", score5);
     this.game.stateTransition.to("modal");
}




}
}