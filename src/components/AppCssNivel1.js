
//importamos el componente que contiene las cartas
import cssNivelUno from "../data/cssNivelUno/cssNivelUno.js";
// console.log(htmlNivelUno.items[0].class);

//declaracion de variables
let cardsInPlay = [];
let board;
let hits = 0;
let attempts = 0;
let time=0;



function timer() {
  setInterval(() => {
    time++;
    document.getElementById("timerCNUno").innerHTML = time;
    
  }, 1000);
}


//funcion donde se barajan las cartas  e imprimir  las cartas
const AppCssNivel1 = () => {
  const el = document.createElement("div");
  el.className = "App";


  //declaramos una variable que contiene el array de las cartas y otro array vacio
  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  board = [];
  board = shuffle(cards);


  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", cssNivelUno.items[board[i]].image);    
    card.setAttribute("class", "back1");
    // Establecemos un data-atributo "cardIndex" para identificar la cartacon el índice del array board
    card.dataset.cardIndex = cssNivelUno.items[board[i]].class;
    card.addEventListener("click", flipCard);
    el.appendChild(card);
  }
  return el;
};



//funcion donde se barajan las cartas e imprimir  las cartas
function shuffle(cards) {
  let shufflecards = [];
  while (cards.length) {
    shufflecards.push(
      cards.splice(Math.floor(Math.random() * cards.length), 1)[0]
    );
  }
  return shufflecards;
}



//funcion para crear cartas invertidas
function flipCard(e) {
  time++;
  if (time==1) {
     timer();    
  }
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  e.target.className = "font transition";
  cardsInPlay.push({ cardElement: e.target, cardIndex: cardIndex });

  setTimeout(() => {
    e.target.className = "";
  }, 350);

  setTimeout(testMatch, 350);


}

function testMatch() {
  if (cardsInPlay.length < 2) return;
  //intentos
  attempts++;
  document.getElementById("attemptsCNUno").innerHTML = attempts;
  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]) {
    match();
  } else {
    tryAgain();
  }
}

// Hay pareja
function match() {

  cardsInPlay[0].cardElement.removeEventListener("click", flipCard);
  cardsInPlay[1].cardElement.removeEventListener("click", flipCard);


  cardsInPlay = []; // Inicia una nueva jugada

  hits++;//aciertos
  document.getElementById("hitsCNUno").innerHTML = hits;


  if (hits == 6) {
    
    
    document.querySelector(".PageCongratulations").style.display = "block";
    document.querySelector(".cssCategory").style.display = "none";

    const newLevel = document.getElementById("buttonNewLevel");
    newLevel.addEventListener("click", Congratulations);
    myStopFunction();
    document.getElementById("attempts").innerHTML = attempts;
  }
}


function Congratulations() {

  document.querySelector(".cssCategoryN2").style.display = "block";
  document.querySelector(".PageCongratulations").style.display = "none";

}



function myStopFunction() { 
  var timer;
  clearInterval(timer);
  document.getElementById("timerEnd").innerHTML = time;
 
}


// No hay pareja
function tryAgain() {
  cardsInPlay[0].cardElement.className = "back1"; // Se da vuelta a cierran las dos cartas
  cardsInPlay[1].cardElement.className = "back1";
  cardsInPlay = []; // Inicia una nueva jugada
}

export default AppCssNivel1;
