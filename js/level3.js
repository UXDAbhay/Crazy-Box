var level3 = function(game){
	console.log("%cStarting level3", "color:white; background:red");
};
  level3.prototype = {
  	create: function(){
  image=game.add.sprite(0,0,'back');
  beat = game.sound.play('m');
beat.loopFull(0.6);var label1;
label1=game.add.text(790,95,score2,{fill:"#ffffff"});
var counter=0;//counts as the screen is clicked
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
var rotatered=game.add.sprite(450,220,'Red');
var rotategreen=game.add.sprite(450,270,'Green');
red1=game.add.sprite(450,-50,'Red');
red2=game.add.sprite(450,770,'Red');
green1=game.add.sprite(450,-50,'Green');
green2=game.add.sprite(450,770,'Green');
image.inputEnabled=true;
rotategreen.inputEnabled=true;
rotatered.inputEnabled=true;
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.enable(rotategreen, Phaser.Physics.ARCADE);
game.physics.enable(rotatered, Phaser.Physics.ARCADE);
var doit;
var text=game.add.text(350,100,"Press S to start....",{fontSize:"35px",font:"Bradley Hand ITC"});
 var key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(start, this);
 function start (argument) {
text.visible=false;
 doit=window.setInterval(function(){
        var arr = [fredsquare1,fgreensquare1,fredsquare2,fgreensquare2],
        rand = Math.floor(Math.random()* arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1100);}

function cleared (argument) {
  test=3;
  beat.stop();
window.clearInterval(doit);
this.game.stateTransition.to("level1clear");
}
function fredsquare1(argument) {
if (score2==50) 
  { window.clearInterval(doit);
    cleared();}
   var demotween = game.add.tween(red1).to({x:450,y:220},1800);
    demotween.onComplete.add(function(){  
      if (red1.y=220){
            
            if (rotatered.y==220){
                     red1.y=-50;
                      game.sound.play('beep');
score2=score2+2; localStorage.setItem("level3score",score2);
                      label1.destroy();
                      label1=game.add.text(790,95,score2,{fill:"#ffffff"});} 
                  else{beat.stop();
                   red1.y=-50;  
                        window.clearInterval(doit);
                    this.game.stateTransition.to("gameover3");};
                    }
                     });
                   demotween.start();}

function fgreensquare1(argument) {
  if (score2==50) 
  {
 window.clearInterval(doit);
    cleared();
  }
    var demotween = game.add.tween(green1).to({x:450,y:220},1800);
    demotween.onComplete.add(function(){
        if (green1.y=220) {
            if (rotategreen.y==220) {
                  green1.y=-50;
                  game.sound.play('beep');
                  score2=score2+2; localStorage.setItem("level3score",score2);
                  label1.destroy();
                  label1=game.add.text(790,95,score2,{fill:"#ffffff"});} 
      else{  
                     beat.stop();
                     green1.y=-50;  
                     window.clearInterval(doit); 
                    this.game.stateTransition.to("gameover3");  
            }
        };
    });
      demotween.start();}
function fredsquare2(argument) {
  if (score2==50) 
  { window.clearInterval(doit);
    cleared();}
    var demotween = game.add.tween(red2).to({x:450,y:270},2600);
    demotween.onComplete.add(function(){
        if (red2.y=320) {
            
            if (rotatered.y==270) {  
           red2.y=770;
               game.sound.play('beep');
                score2=score2+2;
                label1.destroy();
                label1=game.add.text(790,95,score2,{fill:"#ffffff"});
                  localStorage.setItem("level3score", score2);
                 }
                else{beat.stop();
               red2.y=770;
               window.clearInterval(doit);  
               this.game.stateTransition.to("gameover3");}   
        }
    });
      demotween.start();
}

function fgreensquare2(argument) {
   if (score2==50) 
  { window.clearInterval(doit);
    cleared();}
    var demotween = game.add.tween(green2).to({x:450,y:270},2600);
    demotween.onComplete.add(function(){
        if (green2.y=320) {
            if (rotategreen.y==270) {
           green2.y=770;
               game.sound.play('beep');
                score2=score2+2;
                label1.destroy();
                label1=game.add.text(790,95,score2,{fill:"#ffffff"});
                  localStorage.setItem("level3score", score2);} 
                else{beat.stop();
 green2.y=770;
                window.clearInterval(doit); 
               this.game.stateTransition.to("gameover3");    
                };
              };
            });
      demotween.start();
}
image.events.onInputDown.add(listener, this);
var up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  up.onDown.add(listener, this);
var down=game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  down.onDown.add(listener, this);


function listener() {
counter++;
    if(counter%2==0)
    {
        rotatered.y-=50;
        rotategreen.y+=50;
        }   
else{
  rotatered.y+=50;
        rotategreen.y-=50;  
    }}
}}