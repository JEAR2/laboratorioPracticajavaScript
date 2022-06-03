
import { questions } from "./questions.js";

const container = document.querySelector("#container");

const containerQuestion = document.createElement("div");
containerQuestion.id="containerQuestion";
containerQuestion.classList.add("containerQuestion");

const headerMain= document.createElement("div");


const header = document.createElement("div");
header.id="header";
header.classList.add("header");

const category = document.createElement("div");
category.id="category";
category.classList.add("category");

const question = document.createElement("div");
question.id="question";
question.classList.add("question");
question.textContent = "Pregunta"

const optionOne = document.createElement("btn");
optionOne.id="optionOne";
optionOne.classList.add("btn");
optionOne.textContent="Opción 1";
optionOne.addEventListener("click",()=>pushButton(0));

const optionTwo = document.createElement("btn");
optionTwo.id="optionTwo";
optionTwo.classList.add("btn");
optionTwo.textContent="Opción 2";
optionTwo.addEventListener("click",()=>pushButton(1));

const optionThree = document.createElement("btn");
optionThree.id="optionThree";
optionThree.classList.add("btn");
optionThree.textContent="Opción 3";
optionThree.addEventListener("click",()=>pushButton(2));

const optionFour = document.createElement("btn");
optionFour.id="optionFour";
optionFour.classList.add("btn");
optionFour.textContent="Opción 4";
optionFour.addEventListener("click",()=>pushButton(3));

header.append(category);
header.append(question);


/**
 * Bloque que actualiza y muestra el nivel
 */
const labelLevel = document.createElement("label");
labelLevel.id="labelLevel";
labelLevel.textContent="LEVEL" ;


const numberLevel = document.createElement("div");
numberLevel.id="numberLevel"

const showLevel = document.createElement("div");
showLevel.id="level"
showLevel.classList.add("showLevel");
showLevel.style.margin="10px";

showLevel.append(labelLevel);
showLevel.append(numberLevel);


/**
 * Bloque que actualiza y muestra el puntaje
 */

 const labelScore = document.createElement("label");
 labelScore.id="labelScore";
 labelScore.textContent="Score" ;
 
 
 const numberScore = document.createElement("div");
 numberScore.id="numberScore"
 
 const showScore = document.createElement("div");
 showScore.id="showScore"
 showScore.classList.add("showScore");
 
 showScore.append(labelScore);
 showScore.append(numberScore);

 //Boton Salir
 const exitButton = document.createElement("button");
 exitButton.id="exit";
 exitButton.textContent="SALIR";
 exitButton.addEventListener("click",()=>exit());

 const winner = document.createElement("img");
 winner.id="winner";
 winner.classList.add("winner");
 winner.src="data:image/jpeg;base64,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";

const reloadBtn = document.createElement("button");
reloadBtn.id="reloadBtn";
reloadBtn.classList.add("reloadBtn");
reloadBtn.textContent="Reiniciar";
reloadBtn.addEventListener("click",()=>window.location.reload());

const showTitle = document.createElement("h1");
showTitle.textContent="Bienvenido al Juego Preguntas y Respuestas ";
const showCategory = document.createElement("h2");
showCategory.textContent="Responde la Siguiente Pregunta de Categoria: ";
const showUserName = document.createElement("h3");
showUserName.textContent="USER: ";

//containerQuestion.append(showCategory,category,header,optionOne,optionTwo,optionThree,optionFour,exitButton,reloadBtn );
//headerMain.append(showLevel,showScore,showTitle,showUserName);
//container.append(winner,headerMain,containerQuestion);

/**
 * Contenedores para inicio (Login)
 */

const centerLogin = document.createElement("div");
centerLogin.id="centerLogin";
centerLogin.classList.add("centerLogin");

const login = document.createElement("div");
login.id="login";
login.classList.add("login");

const titleLogin = document.createElement("div");
titleLogin.id="titleLogin";
titleLogin.classList.add("titleLogin");
titleLogin.textContent="Ingresa Sistema de Preguntas y Respuestas";

const loginForm = document.createElement("form");
loginForm.id="loginForm";

const inputText = document.createElement("input");
inputText.type="text";
inputText.name="user";
inputText.placeholder="User Name";
inputText.required="true";

const btnSubmit = document.createElement("button");
btnSubmit.type="submit";
btnSubmit.title="JUGAR";
btnSubmit.name="Ingresar";
btnSubmit.textContent="JUGAR";
btnSubmit.addEventListener("click",()=>board());



loginForm.append(inputText,btnSubmit);
login.append(titleLogin,loginForm);
centerLogin.append(login);

container.append(centerLogin);




let n;
let possibleAnswers=[];
let question_base;
let currentOptions = [optionOne,optionTwo,optionThree,optionFour];
let userName;
let level = 1;
let score = 0;
let questionsLevel=[];

init();

function init(){
    
    numberLevel.textContent = level;
    numberScore.textContent = score;
     findQuestionsLevel(level);
      chooseQuestion();
}

function board(){
    
    let removeChild = document.getElementById("container");
    while(removeChild.hasChildNodes()){
        removeChild.removeChild(removeChild.firstChild);
    }
    container.classList.remove("align-items");
    containerQuestion.append(showCategory,category,header,optionOne,optionTwo,optionThree,optionFour,exitButton,reloadBtn );
    headerMain.append(showLevel,showScore,showTitle,showUserName);
    container.append(winner,headerMain,containerQuestion);
    userName = inputText.value;
    
    showUserName.textContent+=" ["+userName+"]";

}
function findQuestionsLevel(id){
    
    questionsLevel.splice(0);
    questions.forEach((element,index,array)=>{
        if(element.level === id){
            questionsLevel.push(element);
        }
        
    });
    console.log(questionsLevel);
}

function chooseQuestion(){

 n =  Math.floor(Math.random()*5);
 question_base = questionsLevel[n];
 category.innerHTML = question_base.category;
 question.innerHTML = question_base.question;
 numberLevel.textContent = level;
 numberScore.textContent = score;
 mixAnswers();

}

function mixAnswers(){
    possibleAnswers =[question_base.correctAnswer,
        question_base.wrongAnswerOne, question_base.wrongAnswerTwo,
        question_base.wrongAnswerThree];
    possibleAnswers.sort(()=>Math.random() - 0.5);    
    optionOne.innerHTML = possibleAnswers[0];
    optionTwo.innerHTML = possibleAnswers[1];
    optionThree.innerHTML = possibleAnswers[2];
    optionFour.innerHTML = possibleAnswers[3];
}

function pushButton(index){
    
    console.log(possibleAnswers[index]);
    if(possibleAnswers[index]===question_base.correctAnswer){
        
        currentOptions[index].style.background = "lightgreen";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bien Hecho! Respuesta Correcta',
            showConfirmButton: false,
            timer: 1500
          })
        setTimeout(()=>{
            reloadOptions();
        },1500);
        console.log(level);
        if(level===5){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Felicitaciones, Haz Ganado!!!',
                text: userName + " Tu puntaje fue de "+score + " Puntos - FELICITACIONES!!!",
                showConfirmButton: false,
                timer: 4000
              })
              setTimeout(()=>{location.reload()},4000);
              saveData();
        }
        level++;
        score+=score*2 +50;
        findQuestionsLevel(level);
    }else{
        score=0;
        currentOptions[index].style.background = "pink";
        setTimeout(()=>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Triste! Respuesta Incorrecta - Inicia de Nuevo',
                showConfirmButton: false,
                timer: 4000
              })
        },1000);
        setTimeout(()=>{location.reload()},4000);
        
    }
   
}

function reloadOptions(){
    for(const opt of currentOptions){
        opt.style.background = "white";
    }
    chooseQuestion();
}
    
function saveData(){ 
    
    localStorage.setItem(userName,score);
} 

function exit(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te haz retirado!!!',
        text: userName + " Tu puntaje fue de "+ score + " Puntos - HASTA PRONTO!!!",
        showConfirmButton: false,
        timer: 4000
      })
      setTimeout(()=>{location.reload()},4000);
      saveData();
}


