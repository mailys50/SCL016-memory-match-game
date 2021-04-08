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
import htmlNivelDos from '../data/htmlNivelDos/htmlNivelDos.js';
// console.log(htmlNivelDos);
// console.log(htmlNivelDos.items[0].class);

//declaracion de variables
let cardsInPlay= [];
let board;
let hits=0;
let attempts = 0;
let time=0;

//funcion timer

function timer(){
let time=0;
  setInterval(() => {
     
      time++
      document.getElementById("timerHNDos").innerHTML = time;
     
  
  }, 1000); 
}

//creamos un div y su clase 
const AppHtmlNivel2 = () => {
  document.querySelector(".endPage").style.display="none";
  const el = document.createElement('div');
  el.className = 'App';
  
  //declaramos una variable que contiene el array de las cartas y otro array vacio
  let cards = [0,1,2,3,4,5,6,7,8,9,10,11];  
  board = [];
  board=shuffle(cards);
  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < board.length; i++) {
  const card= document.createElement("img");
  card.setAttribute("src", htmlNivelDos.items[board[i]].image);
  // console.log(htmlNivelDos.items[board[i]].image);
  card.setAttribute("class", "back");
  // Establecemos un data-atributo "cardIndex" para identificar la carta con el índice del array board
  card.dataset.cardIndex = htmlNivelDos.items[board[i]].class;
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





//funcion para crear las cartas invertidas
function flipCard(e){
  time++;
  if (time==1) {
     timer();    
  }
  var cardIndex = parseInt(e.target.dataset.cardIndex);// Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  e.target.className = "transition";// Coge la clase a utilizar (imagen a mostrar) del array board
  cardsInPlay.push({cardElement: e.target, cardIndex: cardIndex}); // Añade la carta a las actualmente seleccionadas guaradr abietas
  setTimeout(()=>{e.target.className="";}, 500); //para mostrar el zoom de las cartas por 8000 
  setTimeout(testMatch, 500);// Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
 
  
}


//funcion para verificar si se presionaron dos cartas, si son iguales o no
function testMatch(){
  if (cardsInPlay.length < 2) return;// Si no se han seleccionado dos cartas no hace nada
   
  attempts++;
  document.getElementById("attemptsHNDos").innerHTML = attempts;
  // Comprueba si las cartas seleccionadas son iguales y llama a la función correspondiente
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
  cardsInPlay[0].cardElement.removeEventListener("click", flipCard); 
  cardsInPlay[1].cardElement.removeEventListener("click", flipCard);
  // Inicia una nueva jugada  
  cardsInPlay = [];
  hits++;
  document.getElementById("hitsHNDos").innerHTML=hits;
//mensaje de Congratulations
  if (hits==6) {  
  document.querySelector(".endPage").style.display="block";
  document.querySelector(".htmlCategoryN2").style.display="none"; 
  myStopFunction();
  document.getElementById("attemptsF").innerHTML = attempts;
}        
    }

  
  function myStopFunction() {
    var timer;
    clearInterval(timer);
    document.getElementById("timerEndF").innerHTML = time;
  }
  
// funcion que se activa cuando No hay pareja
function tryAgain(){
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = "back";
  cardsInPlay[1].cardElement.className = "back";
  // Inicia una nueva jugada
  cardsInPlay = [];
}

export default AppHtmlNivel2;

