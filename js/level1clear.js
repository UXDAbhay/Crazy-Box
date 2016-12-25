var level1clear = function(game){
	console.log("%cStarting level1clear", "color:white; background:red");
};
  
level1clear.prototype = {
  	create: function(){
clap=game.sound.play('levelclearedsound');
clap.loopFull(0.6);
  game.add.sprite(0,0,'back');
 game.add.sprite(30,100,'levelcleared');
 game.add.text(210,330,"Congratz, You did it! Press ok to continue....",{font: "22px Verdana",fill: "#607d8b" });
var t=game.add.sprite(450,400,'ok');
t.inputEnabled=true;
t.events.onInputDown.add(back, this);
	function back (argument) {
clap.stop();
this.game.stateTransition.to("modal");
}	
}}

