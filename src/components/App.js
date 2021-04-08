// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import pokemon from 'data\Data memoria\memoria.js';
// console.log(pokemon);

// import htmlNivelDos from '../data/htmlNivelDos/htmlNivelDos.js';
// console.log(htmlNivelDos);

//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

//importamos el componente que contiene las cartas
import htmlNivelUno from "../data/htmlNivelUno/htmlNivelUno.js"; // console.log(htmlNivelUno.items[0].class);

//declaracion de variables
let cardsInPlay = [];
let board;
let hits = 0;
let attempts = 0;
let time=0;


//funcion timer
function timer() {
  let time = 0;
  setInterval(() => {
    time++;
    document.getElementById("timerHNUno").innerHTML = time;  
  }, 1000);
}


//creamos un div y su clase 
const App = () => {
  const el = document.createElement("div");
  el.className = "App";


//declaramos una variable que contiene el array de las cartas y otro array vacio
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  board = [];
  board = shuffle(cards);



  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", htmlNivelUno.items[board[i]].image);
    // console.log(htmlNivelUno.items[board[i]].image);
    card.setAttribute("class", "back");
    card.dataset.cardIndex = htmlNivelUno.items[board[i]].class;
    card.addEventListener("click", flipCard);
    el.appendChild(card);
  }
  return el;
};


//funcion donde se barajan las cartas e imprimir  las cartas
function shuffle(cards) {
  let shufflecards = [];
  while (cards.length) {
    shufflecards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]
    );
  }

}


//funcion para crear las cartas invertidas
function flipCard(e) {
  time++;
  if (time==1) {
     timer();    
  }
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  e.target.className = " transition ";
  cardsInPlay.push({ cardElement: e.target, cardIndex: cardIndex });
  
  setTimeout(()=>{e.target.className="";}, 350);
  setTimeout(testMatch, 350);  
  
}


//funcion para verificar si se presionaron dos cartas, si son iguales o no
function testMatch() {  
  if (cardsInPlay.length < 2) return;  
  attempts++;
  document.getElementById("attemptsHNUno").innerHTML = attempts;
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

  cardsInPlay = [];

  hits++;
  document.getElementById("hitsHNUno").innerHTML = hits;



  //mensaje de Congratulations
  if (hits == 6) {    
    document.querySelector(".PageCongratulations").style.display = "block";
    document.querySelector(".htmlCategory").style.display = "none";

    const newLevel = document.getElementById("buttonNewLevel");
    newLevel.addEventListener("click", Congratulations);
    myStopFunction();
    document.getElementById("attempts").innerHTML = attempts;
   
  }
}


function Congratulations() {
  document.querySelector(".htmlCategoryN2").style.display = "block";
  document.querySelector(".PageCongratulations").style.display = "none";
}


function myStopFunction() {
  var timer;
  clearInterval(timer);
  document.getElementById("timerEnd").innerHTML = time;
}


// funcion que se activa cuando No hay pareja
function tryAgain() {
  cardsInPlay[0].cardElement.className = "back";
  cardsInPlay[1].cardElement.className = "back";

  cardsInPlay = [];
}

export default App;

