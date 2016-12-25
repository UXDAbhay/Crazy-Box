var gameover2 = function(game){
	console.log("%cStarting gameover2", "color:white; background:red");
};
  
gameover2.prototype = {
  	create: function(){
  game.add.sprite(0,0,'back');
  		game.add.sprite(45,10,'gameover');
  		var displayscore=localStorage.getItem("level2score");
  		game.add.text(500,350,displayscore);
      game.add.text(400,350,"Score:");
  		var refresh=game.add.sprite(380,500,'refresh');
var gohome=game.add.sprite(480,500,'home');
refresh.inputEnabled=true;
gohome.inputEnabled=true;
refresh.events.onInputDown.add(listener, this);
gohome.events.onInputDown.add(listener2, this);
function listener (argument) {
	score1=0;
      localStorage.setItem("level2score", score1);
this.game.stateTransition.to("level2");
}
function listener2 (argument) {
  score1=0;
     localStorage.setItem("level2score", score1);
     this.game.stateTransition.to("modal");
}
}}