const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var CORDA;
var umacoisavermeiacomponto;
var imagemdefundo;
var melon;
var cuei;
var rabbit;
var BUTTONOFSCISSORS;
var BUTTONOFSCISSORS2;
var BUTTONOFSCISSORS3;
var DEPRESSAO;
var ENTROUMCISCUNUSMEUSZOI;
var PRECISOGANHARMASSAMUSCULAR;
var FUNDIN;
var TESOURINHA;
var AMORENAPARTIUOCORACAO;
var MIORANDODADEPRESSAO;
var GASELIO;
var riafonollab;
var SLA;
var CORDA2;
var CORDA3;
var restricao2;
var restricao3;

function preload(){
 imagemdefundo = loadImage("assets/background.png");
 melon = loadImage("assets/melon.png");
 cuei = loadImage("assets/Rabbit-01.png");
 DEPRESSAO = loadAnimation("assets/sad_1.png","assets/sad_2.png","assets/sad_3.png");
 ENTROUMCISCUNUSMEUSZOI = loadAnimation("assets/blink_1.png","assets/blink_2.png","assets/blink_3.png");
 PRECISOGANHARMASSAMUSCULAR = loadAnimation("assets/eat_0.png","assets/eat_1.png","assets/eat_2.png","assets/eat_3.png","assets/eat_4.png");
 FUNDIN = loadSound("assets/sound1.mp3");
 TESOURINHA = loadSound("assets/rope_cut.mp3");
AMORENAPARTIUOCORACAO = loadSound("assets/sad.wav");
MIORANDODADEPRESSAO = loadSound("assets/eating_sound.mp3");
GASELIO = loadSound("assets/air.wav");

 DEPRESSAO.playing = true;
ENTROUMCISCUNUSMEUSZOI.playing = true;
PRECISOGANHARMASSAMUSCULAR.playing = true;
DEPRESSAO.looping = false;
PRECISOGANHARMASSAMUSCULAR.looping = false;
}

function setup() 
{
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(canW+80,canH);
  
  }
  else{
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(canW+80,canH);
  }
  frameRate(80);
  FUNDIN.play();
  FUNDIN.setVolume(0.5);
  engine = Engine.create();
  world = engine.world;
  DEPRESSAO.frameDelay = 20;
  ENTROUMCISCUNUSMEUSZOI.frameDelay = 20;
  PRECISOGANHARMASSAMUSCULAR.frameDelay = 20;

  rabbit = createSprite(canW*0.25,canH-80,100,100);
  rabbit.addAnimation("triste",DEPRESSAO);
  rabbit.addAnimation("piscar",ENTROUMCISCUNUSMEUSZOI);
  rabbit.addAnimation("comer",PRECISOGANHARMASSAMUSCULAR);
  rabbit.changeAnimation("piscar");
  rabbit.scale = 0.2

  BUTTONOFSCISSORS = createImg("assets/cut_btn.png");
  BUTTONOFSCISSORS.position(220,30);
  BUTTONOFSCISSORS.size(50,50);
  BUTTONOFSCISSORS.mouseClicked(JUNTATDISSO);
  BUTTONOFSCISSORS2 = createImg("assets/cut_btn.png");
  BUTTONOFSCISSORS2.position(330,35);
  BUTTONOFSCISSORS2.size(50,50);
  BUTTONOFSCISSORS2.mouseClicked(JUNTATDISSO2);
  BUTTONOFSCISSORS3 = createImg("assets/cut_btn.png");
  BUTTONOFSCISSORS3.position(360,200);
  BUTTONOFSCISSORS3.size(50,50);
  BUTTONOFSCISSORS3.mouseClicked(JUNTATDISSO3); 

  riafonollab = createImg("assets/balloon.png");
  riafonollab.position(10,250);
  riafonollab.size(150,100);
  riafonollab.mouseClicked(otnev);
  SLA = createImg("assets/mute.png");
  SLA.position(450,20);
  SLA.size(50,50);
  SLA.mouseClicked(CALABOCASEUCorno);

  ground = new Ground(canW/2,canH,canW,20);
  CORDA = new Rope(8,{x:245,y:30});
  CORDA2 = new Rope(7,{x:370,y:40});
  CORDA3 = new Rope(4,{x:400,y:225});
  
var options = {
  density: 0.001,
}
 umacoisavermeiacomponto = Bodies.circle(300,300,15,options);
 Matter.Composite.add(CORDA.body,umacoisavermeiacomponto);
 restricao = new Link(CORDA,umacoisavermeiacomponto);
 restricao2 = new Link(CORDA2,umacoisavermeiacomponto);
 restricao3 = new Link(CORDA3,umacoisavermeiacomponto);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(imagemdefundo,canW/2,canH/2,canW+80,canH);
  Engine.update(engine);

  ground.show();
  CORDA.show();
  CORDA2.show();
  CORDA3.show();

  if(umacoisavermeiacomponto !=null){
image(melon,umacoisavermeiacomponto.position.x,umacoisavermeiacomponto.position.y,70,70);
  }
  if(collide(umacoisavermeiacomponto,rabbit)==true){
rabbit.changeAnimation("comer");
MIORANDODADEPRESSAO.play();
  }
  if(umacoisavermeiacomponto != null && umacoisavermeiacomponto.position.y >= canH*0.9){
  rabbit.changeAnimation("triste");
  AMORENAPARTIUOCORACAO.play();
  umacoisavermeiacomponto = null;
  }
   drawSprites()
}

function JUNTATDISSO(){
 CORDA.break();
 TESOURINHA.play()
 restricao.remove();
 restricao = null
}
function JUNTATDISSO2(){
  CORDA2.break();
  TESOURINHA.play()
  restricao2.remove();
  restricao2 = null
 }
 function JUNTATDISSO3(){
  CORDA3.break();
  TESOURINHA.play()
  restricao3.remove();
  restricao3 = null
 }
 
function collide(body,sprite){
if(body != null){
var D = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
if(D < 80){
World.remove(world,umacoisavermeiacomponto);
umacoisavermeiacomponto = null;
return true;
} else{
  return false
}
}
}

function otnev(){
  Matter.Body.applyForce(umacoisavermeiacomponto,{x:0,y:0},{x:0.01,y:0});
  GASELIO.play();

}

function CALABOCASEUCorno(){
  if(FUNDIN.isPlaying()){
    FUNDIN.stop()
  }
  else{
    FUNDIN.play()
  }
}
