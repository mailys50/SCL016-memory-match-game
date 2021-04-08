
import {App} from './components/App.js';
import AppCss from './components/AppCss.js';
import AppJs from './components/AppJs.js';
import AppLevel2 from './components/appHtmlLevel2.js';
import AppCssLevel2 from './components/AppCssLevel2.js';
import AppJsLevel2 from './components/AppJsLevel2.js';

const buttonHtml =document.getElementById("buttonHtml"); 
const startButtonHtml = document.getElementById("startButtonHtml");
const buttonCss =document.getElementById("buttonCss"); 
const startButtonCss = document.getElementById("startButtonCss");
const buttonJs =document.getElementById("buttonJs"); 
const startButtonJs = document.getElementById("startButtonJs");
const startButton = document.getElementById("startButton");
const startHtmlLevel2 = document.getElementById("startHtmlLevel2");
const startCssLevel2 = document.getElementById("startCssLevel2");
const startJsLevel2 = document.getElementById("starJsLevel2");
const startButtonEnd = document.getElementById("startButtonEnd");



const secondPage = () => {                                               
    document.querySelector('.homePage').style.display = "none";
    document.querySelector('.endPage').style.display="none"
    document.querySelector('.htmlCategory').style.display = "block";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.jsCategory').style.display = "none";
}

buttonHtml.addEventListener("click", secondPage); 



const thirdPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none"
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "block";
  document.querySelector('.jsCategory').style.display = "none";
  
}

buttonCss.addEventListener("click", thirdPage); 


const quarterPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none"
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "none";
  document.querySelector('.jsCategory').style.display = "block";
}

buttonJs.addEventListener("click", quarterPage); 


const homePage = () => {                                                    
    location.reload();
}
startButtonHtml.addEventListener("click", homePage); 
startButtonCss.addEventListener("click", homePage); 
startButtonJs.addEventListener("click", homePage); 
startButton.addEventListener("click",homePage);
startHtmlLevel2.addEventListener("click",homePage);
startCssLevel2.addEventListener("click",homePage);
startJsLevel2.addEventListener("click",homePage);
startButtonEnd.addEventListener("click",homePage);



document.getElementById("root").appendChild(App()); 
document.getElementById("root1").appendChild(AppCss());
document.getElementById("root2").appendChild(AppJs());
document.getElementById("root3").appendChild(AppLevel2());
document.getElementById("root4").appendChild(AppCssLevel2());
document.getElementById("root5").appendChild(AppJsLevel2());
