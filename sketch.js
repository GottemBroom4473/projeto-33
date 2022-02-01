//o jogo sera alguns baloes caindo e voce tera que acerta-los com seu furador,
//a cada balao de diferente cor que voce estourar, voce recebera uma pontuacao diferente 
//a perspectiva do jogador sera parecida com a do angryBirds
//o furador sera parecido com o pentagono do projeto da aula da piramide colorida

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
