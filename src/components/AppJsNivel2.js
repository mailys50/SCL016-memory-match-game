
import jsNivelDos from "../data/jsNivelDos/jsNivelDos.js";
// console.log(jsNivelDos);

let cardsInPlay = [];
let board;
let hits = 0;
let attempts=0;
let time=0;

function timer() {
  setInterval(() => {
    time++;
    document.getElementById("timerJNDos").innerHTML = time;
   
  }, 1000);
}

//creamos un div y su clase 
const AppJsNivel2 = () => {
  const el = document.createElement("div");
  el.className = "App";

  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  board = [];
  board = shuffle(cards);

  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", jsNivelDos.items[board[i]].image);
    // console.log(jsNivelDos.items[board[i]].image);
    card.setAttribute("class", "back2.");
    card.dataset.cardIndex = jsNivelDos.items[board[i]].class; // Establecemos un data-atributo "cardIndex" para identificar la carta con el índice del array board
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



//funcion para crear las cartas invertidas
function flipCard(e) {
  time++;
  if (time==1) {
     timer();    
  }
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  e.target.className = "font transition"; // Coge la clase a utilizar (imagen a mostrar) del array board
  cardsInPlay.push({ cardElement: e.target, cardIndex: cardIndex }); // Añade la carta a las actualmente seleccionadas guaradr abietas

  setTimeout(() => {
    e.target.className = "";
  }, 300);
  
  setTimeout(testMatch, 300);

}

function testMatch() {
  // Si no se han seleccionado dos cartas no hace nada
  if (cardsInPlay.length < 2) return;

  //intentos
  attempts++;
document.getElementById("attemptsJNDos").innerHTML = attempts;

  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]) {
    match();
  } else {
    tryAgain();
  }
  
}


// Hay pareja

function match() {

  // Eliminamos el controlador del evento click de las cartas
  cardsInPlay[0].cardElement.removeEventListener("click", flipCard);
  cardsInPlay[1].cardElement.removeEventListener("click", flipCard);

  // Inicia una nueva jugada
  cardsInPlay = [];



  hits++;
  document.getElementById("hitsJNDos").innerHTML = hits;

  if (hits == 6) {
    
    document.querySelector(".endPage").style.display = "block";
    document.querySelector(".jsCategoryN2").style.display = "none";
    myStopFunction();
    document.getElementById("attemptsF").innerHTML = attempts; 
  }
}

function myStopFunction() {
  var timer;
  clearInterval(timer);
  document.getElementById("timerEndF").innerHTML = time;
}


// No hay pareja
function tryAgain() {
  cardsInPlay[0].cardElement.className = "back2";
  cardsInPlay[1].cardElement.className = "back2";
  // Inicia una nueva jugada
  cardsInPlay = [];
}

export default AppJsNivel2;
// let attempts = 0; //contador de attempts
// let hits = 0; //contador de hits
