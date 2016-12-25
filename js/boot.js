var boot=function(game){
	console.log("%cStarting boot", "color:white; background:red");
};
var play;
boot.prototype={
create: function(){
backmusic=game.sound.play('mytune');
backmusic.loopFull(0.6);
game.add.sprite(0,0,'back2');
var demo2=game.add.sprite(-400,80,'demo2');
var box=game.add.sprite(97,-20,'box');
game.add.text(245,280,"-  A simple Html5 arcade game",{fill:"#ffffff",fontSize:"35px",font:"Bradley Hand ITC",backgroundColor:"#2196f3"});
 game.add.sprite(382,360,'trial');
 play=game.add.sprite(375,350,'newplay');
var i=game.add.sprite(458,465,'about');
var msg=game.add.sprite(250,320,'info');
play.inputEnabled=true;
msg.inputEnabled=true;
i.inputEnabled=true;
msg.visible=false;
i.events.onInputDown.add(showmsg, this);
msg.events.onInputDown.add(hidemsg, this);
play.events.onInputDown.add(listener, this);
function listener () {
backmusic.stop();
this.game.stateTransition.to('modal');

}
function showmsg (argument) {
msg.visible=true;
}
function hidemsg (argument) {
	msg.visible=false;
}
moveboxdown();
function moveboxdown (argument) {
 
var demotween = game.add.tween(box).to({y:80},800);
   demotween.onComplete.add(function(){
  moveboxside();movecrazyside();
});
demotween.start();
}

function moveboxside (argument) {
  var demotween = game.add.tween(box).to({x:480},1400);
   demotween.onComplete.add(function(){

});
demotween.start();

}

function movecrazyside (argument) {
  var demotween = game.add.tween(demo2).to({x:180},1400);
   demotween.onComplete.add(function(){
animateleft();animateleft1();
});
demotween.start();}

function animateleft (argument) {
  var demotween = game.add.tween(demo2).to({x:185},600);
   demotween.onComplete.add(function(){
     animateright();
});
demotween.start();
}

function animateright (argument) {
  var demotween = game.add.tween(demo2).to({x:180},600);
    demotween.onComplete.add(function(){
    animateleft(); 
});
demotween.start();
}

function animateleft1 (argument) {
var demotween = game.add.tween(box).to({x:490},600);
   demotween.onComplete.add(function(){
     animateright1();
});
demotween.start();
}
function animateright1 (argument) {
   var demotween = game.add.tween(box).to({x:485},600);
    demotween.onComplete.add(function(){
    animateleft1(); 
});
demotween.start();
}
}}