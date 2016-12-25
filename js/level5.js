var level5 = function(game){
	console.log("%cStarting level5", "color:white; background:red");
};
  
level5.prototype = {
create: function(){
  image=game.add.sprite(0,0,'back');
  beat = game.sound.play('m');
beat.loopFull(0.6);var label1;
label1=game.add.text(790,95,score4,{fill:"#ffffff"});
var counter=0,counter1=0;//counts as the screen is clicked
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
var rotatered=game.add.sprite(450,220,'Red');
var rotategreen=game.add.sprite(450,270,'Green');
var rotateyellow=game.add.sprite(400,250,'yellow');
var rotateblue=game.add.sprite(500,250,'blue');
red1=game.add.sprite(450,-50,'Red');
green1=game.add.sprite(450,-50,'Green');
yellow1=game.add.sprite(-50,250,'yellow');
blue1=game.add.sprite(-50,250,'blue');
image.inputEnabled=true;
rotategreen.inputEnabled=true;
rotatered.inputEnabled=true;
rotateblue.inputEnabled=true;
rotateyellow.inputEnabled=true;
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.enable(rotategreen, Phaser.Physics.ARCADE);
game.physics.enable(rotatered, Phaser.Physics.ARCADE);
game.physics.enable(rotateblue, Phaser.Physics.ARCADE);
game.physics.enable(rotateyellow, Phaser.Physics.ARCADE);
var doit;
var text=game.add.text(350,100,"Press S to start....",{fontSize:"35px",font:"Bradley Hand ITC"});
 var key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(start, this);

function start (argument) {
text.visible=false;
doit=window.setInterval(function(){
        var arr = [fredsquare1,fgreensquare1,fyellowsquare1,fbluesquare1],
        rand = Math.floor(Math.random()*arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1700);}

function cleared (argument) {
  test=3;
  beat.stop();
window.clearInterval(doit);
this.game.state.start("level1clear");
}

function fredsquare1(argument) {

if (score4==50) 
  { window.clearInterval(doit);
    cleared();}
   var demotween = game.add.tween(red1).to({x:450,y:220},9600);
    demotween.onComplete.add(function(){
        if (red1.y=220){  
            if (rotatered.y==220){
                     red1.y=-50;
                      game.sound.play('beep');
                      score4=score4+2; localStorage.setItem("level5score",score4);
                      label1.destroy();
                      label1=game.add.text(790,95,score4,{fill:"#ffffff"}); } 

                  else{
                   
                    beat.stop();
                    red1.y=-50;  
                  window.clearInterval(doit);
                   this.game.state.start("gameover5");  };
                                          }
    });
      demotween.start();}

function fgreensquare1(argument) {
    if (score4==50) 
  {
 window.clearInterval(doit);
    cleared();
  }
 var demotween = game.add.tween(green1).to({x:450,y:220},9600);
    demotween.onComplete.add(function(){
        if (green1.y=220) {
            if (rotategreen.y==220) {
                  green1.y=-50;
                  game.sound.play('beep');
                  score4=score4+2; localStorage.setItem("level5score",score4);
                  label1.destroy();
                  label1=game.add.text(790,95,score4,{fill:"#ffffff"});
            } 


                else{ beat.stop(); 
                     green1.y=-50;  
                     window.clearInterval(doit); 
                    this.game.state.start("gameover5");}
        };
    });
      demotween.start();}

function fyellowsquare1(argument) {
if (score4==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(yellow1).to({x:400,y:250},9600);
    demotween.onComplete.add(function(){     
        if (yellow1.x=400){            
            if (rotateyellow.x==400){
                             yellow1.x=-50;
                      game.sound.play('beep');
                      score4=score4+2; localStorage.setItem("level5score", score4);
                      label1.destroy();
                      label1=game.add.text(790,95,score4,{fill:"#ffffff"});} 
 
                  else{
                   window.clearInterval(doit);
                    beat.stop();               
                    yellow1.x=-50;                     
                   this.game.state.start("gameover5");};
        } 
    });
      demotween.start();}

function fbluesquare1(argument) {
if (score4==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(blue1).to({x:400,y:250},9600);
    demotween.onComplete.add(function(){
        if (blue1.x=400){           
            if (rotateblue.x==400){
                     blue1.x=-50;
                      game.sound.play('beep');
                      score4=score4+2; localStorage.setItem("level5score", score4);
                      label1.destroy();
                      label1=game.add.text(790,95,score4,{fill:"#ffffff"});} 
                  else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue1.x=-50;  
                    this.game.state.start("gameover5"); };
        } });
      demotween.start();}

  var key1 = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    key1.onDown.add(listener, this);

  var key2 = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    key2.onDown.add(listener2, this);

 var key3=game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    key3.onDown.add(listener, this);

     var key4 = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    key4.onDown.add(listener2, this);

function listener () {
counter++;
    if(counter%2==0)
    { rotatered.y-=50;
        rotategreen.y+=50;}
else{
  rotatered.y+=50;
        rotategreen.y-=50; }
}      

function listener2 (argument) {
counter1++;
    if(counter1%2==0)
    {
        rotateyellow.x-=100;
        rotateblue.x+=100;}
else{
  rotateyellow.x+=100;
        rotateblue.x-=100;  }
      }
}}