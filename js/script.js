
import { questions } from "./questions.js";

const container = document.querySelector("#container");

const header = document.createElement("div");
header.id="header";
header.classList.add("header");

const category = document.createElement("div");
category.id="category";
category.classList.add("category");
category.textContent="Categoria";

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

header.appendChild(category);
header.appendChild(question);

container.append(header,optionOne,optionTwo,optionThree,optionFour);


let n;
let possibleAnswers=[];
let question_base;
let currentOptions = [optionOne,optionTwo,optionThree,optionFour];
let userName;



init();

function init(){
    userName=prompt("Ingresa nombre de Usuario: ","User");
    localStorage.setItem("user",userName);
    chooseQuestion();
}

function chooseQuestion(){
   
 n =  Math.floor(Math.random()*questions.length);
 question_base = questions[n];
 category.innerHTML = question_base.category;
 question.innerHTML = question_base.question;
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
        setTimeout(()=>{
            reloadOptions();
        },1500);
    }else{
        currentOptions[index].style.background = "pink";
        setTimeout(()=>{
            alert("Respuesta Incorrecta");
        },1000);
    }
   
}

function reloadOptions(){
    for(const opt of currentOptions){
        opt.style.background = "white";
    }
    chooseQuestion();
}
    


