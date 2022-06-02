
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


    


