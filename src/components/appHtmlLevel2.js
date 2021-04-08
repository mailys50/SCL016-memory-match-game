
import htmlNivelDos from '../data/htmlNivelDos/htmlNivelDos.js';

let timer;
let cardsInPlay= [];
let board =[];
let cards = [0,1,2,3,4,5,6,7,8,9,10,11];
let hits = 0;
let startTime=0;
let attempts=0;

function timerF() {
  let time = 0;
  timer = setInterval(() => {

    time++
    document.getElementById('timerHtml2').innerHTML = time;
    document.getElementById('timerEndFinal').innerHTML = time;
  }, 1000);
}
const AppLevel2 = () => {
  const el = document.createElement('div');
  el.className = 'App';
//para barajar las cartas o hacer que las cartas aleatoria al recargar la pagina
  while(cards.length){
    board.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);
  }
//realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
for (let i = 0; i < board.length; i++) {
  const card= document.createElement("img");
  card.setAttribute("src", htmlNivelDos.items[board[i]].image);
  // console.log(htmlNivelDos.items[board[i]].image);
  card.setAttribute("class", "back");
  // Establecemos un data-atributo "cardIndex" para identificar la carta
  // con el índice del array board
 card.dataset.cardIndex = htmlNivelDos.items[board[i]].class;
  card.addEventListener('click', flipCard);
  el.appendChild(card);
 }
 return el;
};

function flipCard(e){
  startTime++;
  if(startTime==1) {
    timerF()
  } 
  // Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  // Coge la clase a utilizar (imagen a mostrar) del array board
  e.target.className = "front";
  // Añade la carta a las actualmente seleccionadas guaradr abietas
  cardsInPlay.push({cardElement: e.target, cardIndex: cardIndex});
  // Comprueba si hay "match"
  // Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
  setTimeout(testMatch, 300);
}

function testMatch(){
  // Si no se han seleccionado dos cartas no hace nada
  if (cardsInPlay.length < 2) return;
  attempts++;
  document.getElementById("attemptsHtml2").innerHTML=attempts;
  document.getElementById("attemptsEnd").innerHTML=attempts;
  // Comprueba si las cartas seleccionadas son iguales y llama
  // a la función correspondiente
  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]){
    match();
  }
  else{
    tryAgain();
  }
}

// Hay pareja
function match(){
  // Eliminamos el controlador del evento click de las cartas
  cardsInPlay[0].cardElement.removeEventListener('click', flipCard);
  cardsInPlay[1].cardElement.removeEventListener('click', flipCard);
  // Inicia una nueva jugada
  cardsInPlay = [];
  hits++;
  document.getElementById("hitsHtml2").innerHTML = hits;
  
if (hits==6) {
    document.querySelector(".endPageFinal").style.display="block";
    document.querySelector(".htmlCategoryLevel2").style.display="none";
    myStopFunction();
 }
}
function myStopFunction() {
  clearInterval(timer);
}

// No hay pareja
function tryAgain(){
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = 'back';
  cardsInPlay[1].cardElement.className = 'back';
  // Inicia una nueva jugada
  cardsInPlay = [];
}



export default AppLevel2;