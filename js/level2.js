var level2=function(game){
	console.log("%cStarting level2", "color:white; background:red");
};

level2.prototype={
  	create: function(){
beat = game.sound.play('m');
beat.loopFull(0.6);
label1=game.add.text(790,95,score1,{fill:"#ffffff"});
var label,label1;
var counter=0;//counts as the screen is clicked
var image=game.add.sprite(0,0,'backg');
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
yellow1=game.add.sprite(-50,250,'yellow');
blue1=game.add.sprite(-50,250,'blue');
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
        var arr = [fbluesquare1,fyellowsquare1],
        rand = Math.floor(Math.random() * arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1250);}
function cleared (argument) {
	test=2;
	beat.stop();
window.clearInterval(doit);
this.game.stateTransition.to("level1clear");
}
function fyellowsquare1(argument) {
if (score1==50) {
	window.clearInterval(doit);
	cleared();
};
   var demotween = game.add.tween(yellow1).to({x:425,y:250},1800);
demotween.onComplete.add(function(){
        if (yellow1.x=425){
            if (rotateyellow.x==425){
yellow1.x=-50;
                      game.sound.play('beep');
score1=score1+2; localStorage.setItem("level2score", score1);
                      label1.destroy();
                      label1=game.add.text(790,95,score1,{fill:"#ffffff"});}
                  else{
                   window.clearInterval(doit);
                    beat.stop();
                   yellow1.x=-50;  
                       this.game.stateTransition.to("gameover2");};
        } 
      });
demotween.start();
}

function fbluesquare1(argument) {
if (score1==50) {
	window.clearInterval(doit);
	cleared();
};
   var demotween = game.add.tween(blue1).to({x:425,y:250},1800);
    demotween.onComplete.add(function(){
        if (blue1.x=425){
            if (rotateblue.x==425){
                     blue1.x=-50;
                      game.sound.play('beep');
                      score1=score1+2; localStorage.setItem("level2score", score1);
                      label1.destroy();
                      label1=game.add.text(790,95,score1,{fill:"#ffffff"});  }
            else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue1.x=-50;  
                    this.game.stateTransition.to("gameover2"); };
        }
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
    {rotateyellow.x-=50;
        rotateblue.x+=50;}
      
  else{
  rotateyellow.x+=50;
        rotateblue.x-=50;     } }     
      }}