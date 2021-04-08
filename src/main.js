import App from './components/App.js';
import AppCssNivel1 from './components/AppCssNivel1.js';
import AppJsNivel1 from './components/AppJsNivel1.js';
import AppHtmlNivel2 from './components/AppHtmlNivel2.js';
import AppCssNivel2 from './components/AppCssNivel2.js';
import AppJsNivel2 from './components/AppJsNivel2.js';

const buttonHtml =document.getElementById("buttonHtml"); 
const buttonCss =document.getElementById("buttonCss"); 
const buttonJs =document.getElementById("buttonJs"); 
const startButtonHtml = document.getElementById("startButtonHtml");
const startButtonHtml2 = document.getElementById("startButtonHtml2");
const startButtonCss = document.getElementById("startButtonCss");
const startButtonCss2 = document.getElementById("startButtonCss2");
const startButtonJs = document.getElementById("startButtonJs");
const startButtonJs2 = document.getElementById("startButtonJs2");
const startButton = document.getElementById("startButton");
const startButtonEnd = document.getElementById("startButtonEnd");
// const buttonNewLevel =document.getElementById("buttonNewLevel");




const secondPage = () => {
                                                        
    document.querySelector('.homePage').style.display = "none";
    document.querySelector('.endPage').style.display="none";
    document.querySelector('.htmlCategory').style.display = "block";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.jsCategory').style.display = "none";
    document.querySelector('.htmlCategoryN2').style.display = "none";
    document.querySelector('.cssCategoryN2').style.display = "none";
    document.querySelector('.jsCategoryN2').style.display = "none";
    document.querySelector('.PageCongratulations').style.display = "none";
}

buttonHtml.addEventListener("click", secondPage); 



const thirdPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none";
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "block";
  document.querySelector('.jsCategory').style.display = "none";
  document.querySelector('.htmlCategoryN2').style.display = "none";
  document.querySelector('.cssCategoryN2').style.display = "none";
  document.querySelector('.jsCategoryN2').style.display = "none";
  document.querySelector('.PageCongratulations').style.display = "none";
}

buttonCss.addEventListener("click", thirdPage); 


const quarterPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none";
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "none";
  document.querySelector('.jsCategory').style.display = "block";
  document.querySelector('.htmlCategoryN2').style.display = "none";
  document.querySelector('.cssCategoryN2').style.display = "none";
  document.querySelector('.jsCategoryN2').style.display = "none";
  document.querySelector('.PageCongratulations').style.display = "none";
}

buttonJs.addEventListener("click", quarterPage); 


const jsCategoryN2 = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none";
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "none";
  document.querySelector('.jsCategory').style.display = "none";
  document.querySelector('.htmlCategoryN2').style.display = "none";
  document.querySelector('.cssCategoryN2').style.display = "none";
  document.querySelector('.jsCategoryN2').style.display = "block";
  document.querySelector('.PageCongratulations').style.display = "none";
}

startButtonJs2 .addEventListener("click", jsCategoryN2); 

//reseteo de cartas al iniciar el juego
const homePage = () => {  
  location.reload();                                                  
    document.querySelector('.homePage').style.display = "block";
    document.querySelector('.htmlCategory').style.display = "none";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.jsCategory').style.display = "none";
    document.querySelector('.endPage').style.display="none";
    document.querySelector('.htmlCategoryN2').style.display = "none";
    document.querySelector('.cssCategoryN2').style.display = "none";
    document.querySelector('.jsCategoryN2').style.display = "none";
    document.querySelector('.PageCongratulations').style.display = "none";
}
startButtonHtml.addEventListener("click", homePage); 
startButtonHtml2.addEventListener("click", homePage); 
startButtonCss.addEventListener("click", homePage);
startButtonCss2.addEventListener("click", homePage);  
startButtonJs.addEventListener("click", homePage);
startButtonJs2.addEventListener("click", homePage);
startButton.addEventListener("click", homePage);
startButtonEnd.addEventListener("click", homePage); 


document.getElementById("root").appendChild(App()); 
document.getElementById("root1").appendChild(AppCssNivel1());
document.getElementById("root2").appendChild(AppJsNivel1());
document.getElementById("rootUno").appendChild(AppHtmlNivel2()); 
document.getElementById("rootDos").appendChild(AppCssNivel2());
document.getElementById("rootTres").appendChild(AppJsNivel2());


