var level1 = function(game){
  console.log("%cStarting level1", "color:white; background:red");
};
var red1,rotatered,green1,gameover1,level1clear;
level1.prototype = {
 create: function(){
beat = game.sound.play('m');
beat.loopFull(0.6);
//used for calculating scores
label1=game.add.text(790,95,score,{fill:"#ffffff"});
var label,label1,label2,label3,label4,label5,label6,label7,label8,label9,label10,label11,label12,label13;
var counter=0;//counts as the screen is clicked
var image=game.add.sprite(0,0,'backg');
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
rotatered=game.add.sprite(450,220,'Red');
var rotategreen=game.add.sprite(450,270,'Green');

red1=game.add.sprite(450,-50,'Red');
red2=game.add.sprite(450,770,'Red');
green1=game.add.sprite(450,-50,'Green');
green2=game.add.sprite(450,770,'Green');
//activating input for boxes and screen
image.inputEnabled=true;
rotategreen.inputEnabled=true;
rotatered.inputEnabled=true;
//activating arcade physics to move boxes
 game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.enable(rotategreen, Phaser.Physics.ARCADE);
game.physics.enable(rotatered, Phaser.Physics.ARCADE);
var doit;
var text=game.add.text(350,100,"Press S to start....",{fontSize:"35px",font:"Bradley Hand ITC"});
var text1=game.add.text(200,50,"Use Mouse/Arrow keys to change",{fontSize:"35px",font:"Bradley Hand ITC"});
 var key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(start, this);


function start (argument) {
text.visible=false;
text1.visible=false;
doit=window.setInterval(function(){
        var arr = [fredsquare1,fgreensquare1],
        rand = Math.floor(Math.random() * arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1000);


}
function cleared (argument) {
  test=1;
beat.stop();
window.clearInterval(doit);
this.game.stateTransition.to("level1clear");
}
function fredsquare1(argument) {
if (score==50) 
  { window.clearInterval(doit);
    cleared();}
   var demotween = game.add.tween(red1).to({x:450,y:220},1600);
   demotween.onComplete.add(function(){
      if (red1.y=220){
            
            if (rotatered.y==220){
              red1.y=-50;
              game.sound.play('beep');
score=score+2; localStorage.setItem("level1score", score);
                      label1.destroy();
                      label1=game.add.text(790,95,score,{fill:"#ffffff"});
                      } 
else{beat.stop();
red1.y=-50;  
 window.clearInterval(doit);
this.game.stateTransition.to("gameover1");
};
 }
});
      demotween.start();
}
function fgreensquare1(argument) {
  if (score==50) 
  {
 window.clearInterval(doit);
    cleared();
  }
var demotween = game.add.tween(green1).to({x:450,y:220},1600);
    demotween.onComplete.add(function(){
        if (green1.y=220) {
            if (rotategreen.y==220) {green1.y=-50;
                  game.sound.play('beep');
                  score=score+2; localStorage.setItem("level1score", score);
                  label1.destroy();
                  label1=game.add.text(790,95,score,{fill:"#ffffff"});} 
     
                else{  
                     beat.stop();
                  green1.y=-50;  
                     window.clearInterval(doit); 
                     this.game.stateTransition.to("gameover1"); } };
                   });
      demotween.start();}
image.events.onInputDown.add(listener, this);

  var up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  up.onDown.add(listener, this);
var down=game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  down.onDown.add(listener, this);

function listener () {
counter++;
    if(counter%2==0)
    {
        //alert("hi counter="+counter);
        rotatered.y-=50;
        rotategreen.y+=50;
        }
   
else{
	/*alert("false counter="+counter);*/
	rotatered.y+=50;
        rotategreen.y-=50;
        }
}
}
}


