var canvas;
var gameState=0;
var allContestants;
var contestantCount,database,quiz,question,contestant,answer;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}
function draw(){
  background("pink");
  if(contestantCount===4){
   quiz.update(1);
  }
  if(gameState===1){
    clear();
   quiz.play(); 
  }


    // will add these text after the completion of the game.
    push();
    textSize(19);
    fill("purple")
      text("If you got it right .. that's great! ",435,345);
      fill("black")
 text("But if you didnt ..dont give up.. all of us make mistakes.. dont lose hope.. and try again..",5,370);
 fill("brown")
 text("I know you can get it right..i believe in you... now you believe in yourself!",5,393);
 pop();
}
