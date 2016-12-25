var level6 = function(game){
	console.log("%cStarting level6", "color:white; background:red");
};
level6.prototype = {
  	create: function(){
  image=game.add.sprite(0,0,'back');
  beat = game.sound.play('m');
beat.loopFull(0.6);var label1;
label1=game.add.text(790,95,score5,{fill:"#ffffff"});
var counter=0,counter1=0;//counts as the screen is clicked
game.add.sprite(735,8,'scoretile');
game.add.sprite(765,75,'scoreback');
var rotatered=game.add.sprite(450,220,'Red');
var rotategreen=game.add.sprite(450,270,'Green');
var rotateyellow=game.add.sprite(400,250,'yellow');
var rotateblue=game.add.sprite(500,250,'blue');
red1=game.add.sprite(450,-50,'Red');
green1=game.add.sprite(450,-50,'Green');
red2=game.add.sprite(450,770,'Red');
green2=game.add.sprite(450,770,'Green');
yellow1=game.add.sprite(-50,250,'yellow');
blue1=game.add.sprite(-50,250,'blue');
yellow2=game.add.sprite(1000,250,'yellow');
blue2=game.add.sprite(1000,250,'blue');
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
        var arr = [fredsquare1,fredsquare2,fgreensquare1,fgreensquare2,fyellowsquare1,fyellowsquare2,fbluesquare1,fbluesquare2],
        rand = Math.floor(Math.random()* arr.length),
        randomFunction = arr[rand];
        randomFunction();
}, 1200);}

function cleared (argument) {
  test=3;
  beat.stop();
window.clearInterval(doit);
this.game.stateTransition.to("level1clear");
}

function fredsquare1(argument) {
if (score5==50) 
  { window.clearInterval(doit);
    cleared();}
   var demotween = game.add.tween(red1).to({x:450,y:220},1800);
    demotween.onComplete.add(function(){
        if (red1.y=220){           
            if (rotatered.y==220){     
                     red1.y=-50;
                      game.sound.play('beep');
                      score5=score5+2; localStorage.setItem("level6score",score5);
                      label1.destroy();
                      label1=game.add.text(790,95,score5,{fill:"#ffffff"});} 
                  else{                  
                    beat.stop();
                    red1.y=-50;  
                        window.clearInterval(doit);
                    this.game.stateTransition.to("gameover6"); };
        }
    });  demotween.start();}

function fgreensquare1(argument) {
    if (score5==50) 
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
                  score5=score5+2; localStorage.setItem("level6score",score5);
                  label1.destroy();
                  label1=game.add.text(790,95,score5,{fill:"#ffffff"});} 
                else{  
                     beat.stop();                 
                     green1.y=-50;  
                     window.clearInterval(doit); 
                    this.game.stateTransition.to("gameover6");}};   
    });      demotween.start();}

function fredsquare2(argument) {
  if (score5==50) 
  { window.clearInterval(doit);
    cleared();}
    var demotween = game.add.tween(red2).to({x:450,y:270},2000);
    demotween.onComplete.add(function(){
        if (red2.y=320) {            
            if (rotatered.y==270) {           
           red2.y=770;
               game.sound.play('beep');
                score5=score5+2;
                label1.destroy();
                label1=game.add.text(790,95,score5,{fill:"#ffffff"});
                       localStorage.setItem("level6score", score5);}

                else{beat.stop();
               red2.y=770;
               window.clearInterval(doit);        
               this.game.stateTransition.to("gameover6"); }
        }
    
    });
      demotween.start();}

function fgreensquare2(argument) {
   if (score5==50) 
  { window.clearInterval(doit);
    cleared();}
    var demotween = game.add.tween(green2).to({x:450,y:270},2000);
    demotween.onComplete.add(function(){
        if (green2.y=320) {     
            if (rotategreen.y==270) {
           green2.y=770;
               game.sound.play('beep');
                score5=score5+2;
                label1.destroy();
                label1=game.add.text(790,95,score5,{fill:"#ffffff"});
                  localStorage.setItem("level6score", score5);} 

                else{beat.stop();
               green2.y=770;
                window.clearInterval(doit); 
               this.game.stateTransition.to("gameover6"); };
        };
      });
      demotween.start();}

function fyellowsquare1(argument) {
if (score5==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(yellow1).to({x:400,y:250},1800);
    demotween.onComplete.add(function(){   
        if (yellow1.x=400){            
            if (rotateyellow.x==400){       
                     yellow1.x=-50;
                      game.sound.play('beep');
                      score5=score5+2; localStorage.setItem("level6score", score5);
                      label1.destroy();
                      label1=game.add.text(790,95,score5,{fill:"#ffffff"});  } 
               else{
                   window.clearInterval(doit);
                    beat.stop();                 
                    yellow1.x=-50;  
                    this.game.stateTransition.to("gameover6");
                         };       }  
                          });
      demotween.start(); }

function fbluesquare1(argument) {
if (score5==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(blue1).to({x:400,y:250},1800);
    demotween.onComplete.add(function(){
        if (blue1.x=400){           
            if (rotateblue.x==400){
                     blue1.x=-50;
                      game.sound.play('beep');
                      score5=score5+2; localStorage.setItem("level6score", score5);
                      label1.destroy();
                      label1=game.add.text(790,95,score5,{fill:"#ffffff"});}
else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue1.x=-50;  
                    this.game.stateTransition.to("gameover6"); };
                       }
                        });
      demotween.start();}

function fyellowsquare2(argument) {
if (score5==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(yellow2).to({x:550,y:250},1800);
    demotween.onComplete.add(function(){
        if (yellow2.x=550){           
            if (rotateyellow.x==500){
                     yellow2.x=1000;
                      game.sound.play('beep');
                      score5=score5+2; localStorage.setItem("level6score", score5);
                      label1.destroy();
                      label1=game.add.text(790,95,score5,{fill:"#ffffff"});
            } 
  else{
                   window.clearInterval(doit);
                    beat.stop();                 
                    yellow2.x=1000;                                            
                    this.game.stateTransition.to("gameover6"); };        }  
    });     demotween.start(); }

function fbluesquare2(argument) {
if (score5==50) {
  window.clearInterval(doit);
  cleared();
};
   var demotween = game.add.tween(blue2).to({x:550,y:250},1800);
  demotween.onComplete.add(function(){
        if (blue2.x=550){
            if (rotateblue.x==500){
                     blue2.x=1000;
                      game.sound.play('beep');
                      score5=score5+2; localStorage.setItem("level6score", score5);
                      label1.destroy();
                      label1=game.add.text(790,95,score5,{fill:"#ffffff"});
            } 
                             else{
                   window.clearInterval(doit);
                    beat.stop();
                    blue2.x=1000;  
                    this.game.stateTransition.to("gameover6"); };
        }  
    });
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
        rotategreen.y+=50;   }
   
else{
  rotatered.y+=50;
        rotategreen.y-=50;    }
}

function listener2 (argument) {
counter1++;
    if(counter1%2==0)
    {rotateyellow.x-=100;
        rotateblue.x+=100;}
else{
  rotateyellow.x+=100;
        rotateblue.x-=100;}
    }    
    }}