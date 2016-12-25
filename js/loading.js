var loading = function(game){
	console.log("%cLOADING ....", "color:white; background:red");
};
  
  loading.prototype = {
	preload: function(){
 game.add.text(400,250,"Loading....",{fill:"#ffffff",fontSize:"35px",font:"Showcard Gothic"});

    game.load.image('back','img2.gif');
         game.load.image('back2','bluepattern.png');
            game.load.image('trial','newtrial.gif');
             game.load.image('newplay','newplay.png');
              game.load.image('about','about.png');
              game.load.image('info','info.png');
              game.load.image('demo2','demo2.png');
                   game.load.image('box','box.png');
       game.load.audio('mytune', ['mytune.mp3']);
       game.load.image('backg','img2.gif');
     game.load.image('scoretile','scoretile.jpg');
   game.load.image('scoreback','scoreback.jpg');
   game.load.image('Red','red.png');
   game.load.image('Green','green.png');
  game.load.audio('m', ['Drum.wav']);
  game.load.audio('beep', ['beep2.mp3']); 
        game.load.image('yellow','yellow.png');
      game.load.image('blue','blue.png');
  game.load.image('modalback','modalback.png');
     game.load.image('backbutton','backbutton.png');
      game.load.image('clevel1','level1.png');
        game.load.image('unlock','unlock.png');
         game.load.image('clevel1','level1.png');
           game.load.image('clevel2','level2.png');
             game.load.image('clevel3','level3.png');
                 game.load.image('clevel4','level4.png');
                      game.load.image('clevel5','level5.png');
                          game.load.image('clevel6','level6.png');   
                                game.load.image('levelcleared','levelcleared.png');
       game.load.audio('levelclearedsound', ['levelcleared.mp3']);
      game.load.image('ok','ok.png');
   game.load.image('gameover','gameover.png');
       game.load.image('refresh','refresh.png');
       game.load.image('home','home.png');                         
    
},
  	create: function(){
game.state.start('boot');

 }}