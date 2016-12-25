var level4=function(game){
	console.log("%cStarting level4", "color:white; background:red");
};
level4.prototype={
create: function(){
beat = game.sound.play('m');
beat.loopFull(0.6);
label1=game.add.text(790,95,score3,{fill:"#ffffff"});
var label,label1;
var counter=0;//counts as the screen is clicked
var image=game.add.sprite(0,0,'backg');
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
var yellow1=game.add.sprite(-50,250,'yellow');
var blue1=game.add.sprite(-50,250,'blue');
var yellow2=game.add.sprite(1000,250,'yellow');
var blue2=game.add.sprite(1000,250,'blue');
var rotateyellow=game.add.sprite(425,250,'yellow');
var rotateblue=game.add.sprite(475,250,'blue');
image.inputEnabled=true;
rotateyellow.inputEnabled=true;
rotateblue.inputEnabled=true;
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.enable(rotateblue, Phaser.Physics.ARCADE);
game.physics.enable(rotateyellow, Phaser.Physics.ARCADE);

var doit;
var text=game.add.text(350,100,"Press S to start....",{fontSize:"35px",font:"Bradley Hand ITC"});
 var key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(start, this);

    function start (argument) {
 text.visible=false;
    doit=window.setInterval(function(){
        var arr = [fyellowsquare1,fbluesquare1,fbluesquare2,fyellowsquare2],
        rand = Math.floor(Math.random() * arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1500);}
function cleared (argument) {
  test=4;
  beat.stop();
window.clearInterval(doit);
this.game.stateTransition.to("level1clear");
}


function fyellowsquare1(argument) {
if (score3==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(yellow1).to({x:425,y:250},1700);
    demotween.onComplete.add(function(){
        if (yellow1.x=425){ 
            if (rotateyellow.x==425){
                     yellow1.x=-50;
                      game.sound.play('beep');
                      score3=score3+2; localStorage.setItem("level4score", score3);
                      label1.destroy();
                      label1=game.add.text(790,95,score3,{fill:"#ffffff"}); } 
                  else{
                   window.clearInterval(doit);
                    beat.stop();
                    yellow1.x=-50;  
                    this.game.stateTransition.to("gameover4");};
        }
});
demotween.start();}

function fyellowsquare2(argument) {
if (score3==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(yellow2).to({x:525,y:250},1700);
demotween.onComplete.add(function(){
        if (yellow2.x=525){          
            if (rotateyellow.x==475){
                     yellow2.x=1000;
                      game.sound.play('beep');
                      score3=score3+2; localStorage.setItem("level4score", score3);
                      label1.destroy();
                      label1=game.add.text(790,95,score3,{fill:"#ffffff"});} 
                  else{
                   window.clearInterval(doit);
                    beat.stop();
                    yellow2.x=1000;  
                    this.game.stateTransition.to("gameover4");    };
        }
    });
      demotween.start();}

function fbluesquare1(argument) {
if (score3==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(blue1).to({x:425,y:250},1700);
    demotween.onComplete.add(function(){
        if (blue1.x=425){
            
            if (rotateblue.x==425){
                     blue1.x=-50;
                      game.sound.play('beep');
                      score3=score3+2; localStorage.setItem("level4score", score3);
                      label1.destroy();
                      label1=game.add.text(790,95,score3,{fill:"#ffffff"});
            } 
else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue1.x=-50;  
                    this.game.stateTransition.to("gameover4"); };
        }
    });
      demotween.start();}
function fbluesquare2(argument) {
if (score3==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(blue2).to({x:525,y:250},1700);
    demotween.onComplete.add(function(){
        if (blue2.x=525){ 
            if (rotateblue.x==475){
                     blue2.x=1000;
                      game.sound.play('beep');
                      score3=score3+2; localStorage.setItem("level4score", score3);
                      label1.destroy();
                      label1=game.add.text(790,95,score3,{fill:"#ffffff"});} 
                  else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue2.x=1000;  
                    this.game.stateTransition.to("gameover4");};  }
});
 demotween.start();}
image.events.onInputDown.add(listener, this);
  var left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  left.onDown.add(listener, this);
var right=game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  right.onDown.add(listener, this);
function listener () {
counter++;
   if(counter%2==0)
    { rotateyellow.x-=50;
        rotateblue.x+=50;
        }
   
else{
  rotateyellow.x+=50;
        rotateblue.x-=50;   
    }}
}}