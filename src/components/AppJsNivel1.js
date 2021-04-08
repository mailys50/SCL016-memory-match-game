//
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
import jsNivelUno from "../data/jsNivelUno/jsNivelUno.js";
//  console.log(jsNivelUno);
// console.log(htmlNivelUno.items[0].class);

//declaracion de variables
let cardsInPlay = [];
let board;
let hits = 0;
let attempts = 0;
let time=0;


//funcion cronometro
function timer(){
let time=0;
  setInterval(() => {     
      time++
      document.getElementById("timerJNUno").innerHTML = time;  
  }, 1000); 
}


//crear div y su clase
const AppJsNivel1 = () => {
  const el = document.createElement("div");
  el.className = "App";


  //declaramos una variable que contiene el array de las cartas y otro array vacio
  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  board = [];

  board=shuffle(cards);

  
  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", jsNivelUno.items[board[i]].image);
    // console.log(jsNivelUno.items[board[i]].image);
    card.setAttribute("class", "back2");
    // Establecemos un data-atributo "cardIndex" para identificar la carta con el índice del array board
    card.dataset.cardIndex = jsNivelUno.items[board[i]].class;
    card.addEventListener("click", flipCard);
    el.appendChild(card);
  }
  return el;
};


//funcion donde se barajan las cartas e imprimir  las cartas
function shuffle(cards){
  let shufflecards=[];
  while(cards.length){
    shufflecards.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);
   
  }
  return shufflecards
}


// timer();


//funcion para crear las cartas invertidas
function flipCard(e) {  
  time++;
  if (time==1) {
     timer();    
  }
  var cardIndex = parseInt(e.target.dataset.cardIndex);// Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  e.target.className = "transition"; // Coge la clase a utilizar (imagen a mostrar) del array board
  // Añade la carta a las actualmente seleccionadas guaradr abietas
  cardsInPlay.push({ cardElement: e.target, cardIndex: cardIndex });
  //para mostrar el zoom de las cartas por 500 
  setTimeout(()=>{e.target.className="";}, 500);
  // Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
  setTimeout(testMatch, 500);
  
  
  
}

function testMatch() {
  
  if (cardsInPlay.length < 2) return;// Si no se han seleccionado dos cartas no hace nada
  attempts++;
  document.getElementById("attemptsJNUno").innerHTML = attempts;
  // Comprueba si las cartas seleccionadas son iguales y llama a la función correspondiente
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
  document.getElementById("hitsJNUno").innerHTML = hits;

  if (hits==6) {

    document.querySelector(".PageCongratulations").style.display="block";
    document.querySelector(".jsCategory").style.display="none";

    const newLevel= document.getElementById("buttonNewLevel");
    newLevel.addEventListener("click", Congratulations);
    myStopFunction();
    document.getElementById("attempts").innerHTML = attempts;
  }
  function Congratulations(){
    document.querySelector(".jsCategoryN2").style.display="block";
    document.querySelector(".PageCongratulations").style.display="none";

  }

}

function myStopFunction() {
  var timer;
  clearInterval(timer);
  document.getElementById("timerEnd").innerHTML = time;
}


// No hay pareja
function tryAgain() {
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = "back2";
  cardsInPlay[1].cardElement.className = "back2";
  // Inicia una nueva jugada
  cardsInPlay = [];
}

export default AppJsNivel1;
