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
//
import htmlNivelUno from '../data/htmlNivelUno/htmlNivelUno.js';

let timer=0;
let time = 0;
let cardsInPlay = [];
let board = [];
let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let hits = 0;
let startTime=0;
let attempts=0;

function timerF() {
  timer = setInterval(() => {
    time++
    document.getElementById('timerHtml').innerHTML = time;
    document.getElementById('timerEnd').innerHTML = time;
  }, 1000);
}

export const App = () => {
  const el = document.createElement('div');
  el.className = 'App';

  //para barajar las cartas o hacer que las cartas aleatoria al recargar la pagina
  // while(cards.length){
  //   board.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);
  //   console.log(cards.length);
  //   console.log(board);
  // }
  board = shuffle(cards);

  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", htmlNivelUno.items[board[i]].image);
    card.setAttribute("class", "back");
    // Establecemos un data-atributo "cardIndex" para identificar la carta
    // con el índice del array board
    // console.log(board);
    card.dataset.cardIndex = htmlNivelUno.items[board[i]].class;
    // console.log(htmlNivelUno);
    // console.log(htmlNivelUno.items[board[i]].class);
    // console.log(card);
    card.addEventListener('click', flipCard);
    el.appendChild(card);
  }
  return el;
};

export function shuffle(cards) {
  let shufflecards = [];
  while (cards.length) {
    shufflecards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
  }
  return shufflecards;
}

function flipCard(e) {
  startTime++;
  if(startTime==1) {
    timerF();
  } 
  // Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  // Coge la clase a utilizar (imagen a mostrar) del array board
  e.target.className = "front";
  // Añade la carta a las actualmente seleccionadas guaradr abietas
  cardsInPlay.push({ cardElement: e.target, cardIndex: cardIndex });
  console.log(cardsInPlay);
  // Comprueba si hay "match"
  // Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
  setTimeout(testMatch, 300);
}

function testMatch() {
  // Si no se han seleccionado dos cartas no hace nada
  if (cardsInPlay.length < 2) return;
  attempts++;
  document.getElementById("attemptsHtml").innerHTML=attempts;
  document.getElementById("attempts").innerHTML=attempts;
  // Comprueba si las cartas seleccionadas son iguales y llama
  // a la función correspondiente
  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]) {
    match();
  }
  else {
    tryAgain();
  }
}


// Hay pareja
function match() {
  // Eliminamos el controlador del evento click de las cartas
  cardsInPlay[0].cardElement.removeEventListener('click', flipCard);
  cardsInPlay[1].cardElement.removeEventListener('click', flipCard);
  // Inicia una nueva jugada
  cardsInPlay = [];
  hits++;
  document.getElementById("hitsHtml").innerHTML = hits;
  if (hits == 6) {
    document.querySelector(".endPage").style.display = "block";
    document.querySelector(".htmlCategory").style.display = "none";
    const newLevel = document.getElementById("buttonNewLevel");
    newLevel.addEventListener("click", leveltwo);
    myStopFunction();
  }
}
function leveltwo() {
  document.querySelector(".endPage").style.display = "none";
  document.querySelector(".htmlCategoryLevel2").style.display = "block";
}
function myStopFunction() {
  clearInterval(timer);
}
// No hay pareja
function tryAgain() {
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = 'back';
  cardsInPlay[1].cardElement.className = 'back';
  // Inicia una nueva jugada
  cardsInPlay = [];
}

export default App;
