var modal=function(game){
	console.log("%cStarting modal menu", "color:white; background:red");
};
modal.prototype={
  	create: function(){
   
backmusic2=game.sound.play('mytune');
backmusic2.loopFull(0.6);
  		game.add.sprite(0,0,'modalback');
  		game.add.text(445,10,"Menu",{fill:"#ffffff",fontSize:"35px",font:"Showcard Gothic"});
  		game.add.text(435,30,"----------",{fill:"#ffffff",fontSize:"35px"}); 


  		var backtoboot=game.add.sprite(10,5,'backbutton');
	var lv1=game.add.sprite(100,150,'clevel1');
lv2=game.add.sprite(400,150,'clevel2');
var lv3=game.add.sprite(700,150,'clevel3');
var lv4=game.add.sprite(100,400,'clevel4');
var lv5=game.add.sprite(400,400,'clevel5');
var lv6=game.add.sprite(700,400,'clevel6');
var msg=game.add.sprite(280,230,'unlock');
//var lv2=game.add.sprite(400,100,'clevel2');
lv1.inputEnabled=true;
lv2.inputEnabled=true;
lv3.inputEnabled=true;
lv4.inputEnabled=true;
lv5.inputEnabled=true;
lv6.inputEnabled=true;
msg.inputEnabled=true;
backtoboot.inputEnabled=true;
msg.visible=false;
lv1.events.onInputDown.add(listener,this);
lv2.events.onInputDown.add(listener2,this);
lv3.events.onInputDown.add(listener3,this);
lv4.events.onInputDown.add(listener4,this);
lv5.events.onInputDown.add(listener5,this);
lv6.events.onInputDown.add(listener6,this);
msg.events.onInputDown.add(hidemsg,this);
backtoboot.events.onInputDown.add(backme,this);
function listener (argument) {
	// body...
backmusic2.stop();
score=0;localStorage.setItem("level1score", score);
	this.game.stateTransition.to("level1");
}

function listener2 (argument) {
backmusic2.stop();
score1=0;localStorage.setItem("level2score", score1);
this.game.stateTransition.to("level2");}



function listener3 (argument) {
	backmusic2.stop();
score2=0;localStorage.setItem("level3score", score2);
this.game.stateTransition.to("level3");
}
function listener4 (argument) {
	backmusic2.stop();
score3=0;localStorage.setItem("level4score", score3);
this.game.stateTransition.to("level4");
}
function listener5 (argument) {
	backmusic2.stop();
score4=0;localStorage.setItem("level5score", score4);
this.game.stateTransition.to("level5");
}
function listener6 (argument) {
backmusic2.stop();
score5=0;localStorage.setItem("level6score", score5);
this.game.stateTransition.to("level6");
}
function hidemsg (argument) {
	msg.visible=false;
}
function backme (argument) {
	backmusic2.stop();
this.game.stateTransition.to("boot");
}}}