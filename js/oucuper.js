window.onload = init;
let canvas, ctx;
let couleurSkin = "#fff7cc";
let xBonhomme = 0, yBonhomme = 100;
let vitesseX = 10, vitesseY = 1;

var frame = 0;
var time = 0;
var state = true; // true angle+ , false angle-
var timeLimit = 5;

var skins = ["#fff7cc","#ffa400","#835c3b","#2f2323"];
var indice = 0;

function init() {
  console.log("page chargée");
  
  canvas = document.querySelector("#myCanvas");
 
  ctx = canvas.getContext("2d");
 
  animeBonhomme();
  setInterval(changeCouleur, 4000);
}

// changement de couleur
function changeCouleur() {
  indice = indice+1;
  if(indice == 4){
    indice = 0;
  }
  couleurSkin= skins[indice]; //selection de la couleur selon l'indice
}

function animeBonhomme() {
  // 1 - on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 2 - on dessine dans le canvas
  drawBonhomme(xBonhomme, yBonhomme);
  frame++; // compteur de frame
  if(frame == 59){ // au bout d'une seconde : 60 frames = 1 seconde
    time++;
    frame = 0;
    console.log(time);
  }
  if(time == timeLimit){
    time = 0;
    if(state == true){
      state = false;
      console.log(state);
    }
    else if(state == false){
      state = true;
      console.log(state);
    }
  }
  if(state == true){
    angleBrasGauche = angleBrasGauche + 0.05 * 2;
    angleBrasDroit += 0.05;
  }
  if(state == false){
    angleBrasGauche -= 0.05;
    angleBrasDroit -= 0.05;
  }
  // 4 - On rapelle 60 fois par seconde la fonction
  requestAnimationFrame(animeBonhomme);
  
}
function drawBonhomme(x, y) {
  // bonne pratique: sauver au début et restaurer le contexte à la fin
  ctx.save();
  
  // x, y, largeur, hauteur. Origine = le coin
  ctx.translate(x+100, y);//on décale le bonhomme de 100 px
  
  // en haut à gauche
  ctx.fillStyle = "red"; // valeur = une couleur CSS3
  ctx.fillRect(0, 0, 100, 100);
  
  // Le cou et la tête
  dessineCouEtTete();
  
  // Les bras
  dessineBrasGauche();
  dessineBrasDroit();

  // Les jambes
  dessineJambeDroite();
  dessineJambeGauche();
  //Les pieds
  dessinePiedGauche();
  dessinePiedDroit();
  
  // deuxième bonne pratique: pour dessiner en x, y, on déplace
  // le repère et on dessine comme si on était en 0, 0
  ctx.restore();
}

function dessineCouEtTete() {
  ctx.save();
  
  // On translate par rapport au repère courant (le corps)
  ctx.translate(35, -20);
    // Le cou
  ctx.fillStyle = couleurSkin;
  ctx.fillRect(0, 0, 30, 20);
  
  // La tête, je translate par rapport au cou
  ctx.translate(-10, -50);
  ctx.fillStyle=couleurSkin;
  ctx.fillRect(0, 0, 50, 50)
  
  ctx.restore();
}

let angleBrasGauche = 0, angleAvantBrasGauche = 0.3;
let angleBrasDroit = 0, angleAvantBrasDroit = 0.2;

function dessineBrasGauche(angle) {
  ctx.save();
  
  ctx.translate(10, 5);
  ctx.rotate(angleBrasGauche);
  
  ctx.fillStyle="red";
  ctx.fillRect(0, 0, 20, 50);
  
  // Dessin de l'avant bras gauche
  dessineAvantBrasGauche(angle);
  ctx.restore();
}


function dessineAvantBrasGauche(angle) {
  ctx.save();
  
  ctx.translate(10, 40);
  ctx.rotate(angleAvantBrasGauche);
  // Pour changer le point de controle
  ctx.translate(-10, 0);
  
  ctx.fillStyle=couleurSkin;
  ctx.fillRect(0, 0, 20, 50);
  ctx.restore();
}

function dessineBrasDroit(angle) {
  ctx.save();
  
  ctx.translate(90,10);
  ctx.rotate(angleBrasDroit);
  
  ctx.fillStyle="red";
  ctx.fillRect(0, 0, 20, 50);
  
  // Dessin de l'avant bras droit
  dessineAvantBrasDroit(angle);
  ctx.restore();
}

function dessineAvantBrasDroit(angle) {
  ctx.save();
  
  ctx.translate(10, 40);
  ctx.rotate(angleAvantBrasDroit);
  // Pour changer le point de controle
  ctx.translate(-10, 0);
  
  ctx.fillStyle=couleurSkin;
  ctx.fillRect(0, 0, 20, 50);
  ctx.restore();
}

function dessineJambeGauche(){
  ctx.save();
  
  ctx.translate(0, 100);
  
  ctx.fillStyle="blue";
  ctx.fillRect(0, 0, 20, 80);
  ctx.restore();
}

function dessineJambeDroite(){
  ctx.save();
  
  ctx.translate(80, 100);
  
  ctx.fillStyle="blue";
  ctx.fillRect(0, 0, 20, 80);
  ctx.restore();
}

function dessinePiedGauche(){
  ctx.save();
  
  ctx.translate(80, 100);
  ctx.fillStyle="#663300";
  ctx.fillRect(0, 75, 35, 10);
  ctx.restore();
}

function dessinePiedDroit(){
  ctx.save();
  
  ctx.translate(0, 100);
  
  ctx.fillStyle="#663300";
  ctx.fillRect(0, 75, 35, 10);
  ctx.restore();
}


