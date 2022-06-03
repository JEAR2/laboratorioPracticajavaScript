/**
 * Sistema de Preguntas y Respuestas
 * Autor: John Edward Acevedo Rojas
 * Versión: v1-02/06/22 
 */
import { questions } from "./questions.js";

const container = document.querySelector("#container");

/**
 * Bloque de creación de los componentes HTML mediante DOM
 * 
 */
const containerQuestion = document.createElement("div");
containerQuestion.id = "containerQuestion";
containerQuestion.classList.add("containerQuestion");

const headerMain = document.createElement("div");
headerMain.id = "headerMain";
headerMain.classList.add("headerMain");

const header = document.createElement("div");
header.id = "header";
header.classList.add("header");

const category = document.createElement("div");
category.id = "category";
category.classList.add("category");

const question = document.createElement("div");
question.id = "question";
question.classList.add("question");
question.textContent = "Pregunta"

const optionOne = document.createElement("btn");
optionOne.id = "optionOne";
optionOne.classList.add("btn");
optionOne.textContent = "Opción 1";
optionOne.addEventListener("click", () => pushButton(0));

const optionTwo = document.createElement("btn");
optionTwo.id = "optionTwo";
optionTwo.classList.add("btn");
optionTwo.textContent = "Opción 2";
optionTwo.addEventListener("click", () => pushButton(1));

const optionThree = document.createElement("btn");
optionThree.id = "optionThree";
optionThree.classList.add("btn");
optionThree.textContent = "Opción 3";
optionThree.addEventListener("click", () => pushButton(2));

const optionFour = document.createElement("btn");
optionFour.id = "optionFour";
optionFour.classList.add("btn");
optionFour.textContent = "Opción 4";
optionFour.addEventListener("click", () => pushButton(3));

header.append(category);
header.append(question);


/**
 * Bloque que actualiza y muestra el nivel
 */
const labelLevel = document.createElement("label");
labelLevel.id = "labelLevel";
labelLevel.textContent = "LEVEL";


const numberLevel = document.createElement("div");
numberLevel.id = "numberLevel"

const showLevel = document.createElement("div");
showLevel.id = "level"
showLevel.classList.add("showLevel");
showLevel.style.margin = "10px";

showLevel.append(labelLevel);
showLevel.append(numberLevel);


/**
 * Bloque que actualiza y muestra el puntaje
 */

const labelScore = document.createElement("label");
labelScore.id = "labelScore";
labelScore.textContent = "Score";


const numberScore = document.createElement("div");
numberScore.id = "numberScore"

const showScore = document.createElement("div");
showScore.id = "showScore"
showScore.classList.add("showScore");

showScore.append(labelScore);
showScore.append(numberScore);


const exitButton = document.createElement("button");
exitButton.id = "exit";
exitButton.textContent = "RETIRARSE";
exitButton.addEventListener("click", () => exit());


const reloadBtn = document.createElement("button");
reloadBtn.id = "reloadBtn";
reloadBtn.classList.add("reloadBtn");
reloadBtn.textContent = "Reiniciar";
reloadBtn.addEventListener("click", () => window.location.reload());

const showTitle = document.createElement("h1");
showTitle.textContent = "Bienvenido al Juego Preguntas y Respuestas ";
const showCategory = document.createElement("h2");
showCategory.textContent = "Responde la Siguiente Pregunta de Categoria: ";
const showUserName = document.createElement("h3");
showUserName.textContent = "USER: ";

/**
 * Bloque para tabla de Puntajes
 */

const table = document.createElement("table");
const tr = document.createElement("tr");
const thUser = document.createElement("th");
const thScore = document.createElement("th");

thUser.textContent = "Nombre de Usuario";
thScore.textContent = "Puntaje Obtenido";

tr.appendChild(thUser);
tr.appendChild(thScore);

table.append(tr);


/**
 * Contenedores para inicio (Login)
 */

const centerLogin = document.createElement("div");
centerLogin.id = "centerLogin";
centerLogin.classList.add("centerLogin");

const login = document.createElement("div");
login.id = "login";
login.classList.add("login");

const titleLogin = document.createElement("div");
titleLogin.id = "titleLogin";
titleLogin.classList.add("titleLogin");
titleLogin.textContent = "Ingresa Sistema de Preguntas y Respuestas";

const loginForm = document.createElement("form");
loginForm.id = "loginForm";

const inputText = document.createElement("input");
inputText.type = "text";
inputText.name = "user";
inputText.placeholder = "User Name";
inputText.required = "true";

const btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.title = "JUGAR";
btnSubmit.name = "Ingresar";
btnSubmit.textContent = "JUGAR";
btnSubmit.addEventListener("click", () => board());

const btnScore = document.createElement("button");
btnScore.type = "submit";
btnScore.title = "HISTORIAL";
btnScore.name = "Historial";
btnScore.textContent = "HISTORIAL";
btnScore.addEventListener("click", () => data());

const btnPreview = document.createElement("button");
btnPreview.type = "submit";
btnPreview.title = "REGRESAR";
btnPreview.name = "regresare";
btnPreview.textContent = "REGRESAR";
btnPreview.addEventListener("click", () => location.reload());

const titleScore = document.createElement("h2");
titleScore.textContent = "Estos son los Puntajes de Todos los Jugadores";

loginForm.append(inputText, btnSubmit, btnScore);
login.append(titleLogin, loginForm);
centerLogin.append(login);




/**
 * Bloque de lógica del sistema 
 * En este bloque se encuentran tanto variables como métodos necesarios para que el sistema
 * funcione de manera dinámica 
 */

let n;
let possibleAnswers = [];
let question_base;
let currentOptions = [optionOne, optionTwo, optionThree, optionFour];
let userName;
let level = 1;
let score = 0;
let questionsLevel = [];

init();

/**
 * Función Principal
 * Esta función permite dar inicio a los componentes del juego 
 * lanzado como primera vista el login y posteriormente dirigiendo al juego 
 */
function init() {
    container.append(centerLogin);
    numberLevel.textContent = level;
    numberScore.textContent = score;
    findQuestionsLevel(level);
    chooseQuestion();
}

/**
 * Función Interacción
 * En esta función permite que el usuario interactúe directamente con el sistema
 * mostrando los componentes asignados en la mismo mediente DOM
 */
function board() {

    let removeChild = document.getElementById("container");
    while (removeChild.hasChildNodes()) {
        removeChild.removeChild(removeChild.firstChild);
    }

    containerQuestion.append(showCategory, category, header, optionOne, optionTwo, optionThree, optionFour, exitButton, reloadBtn);
    headerMain.append(showLevel, showScore, showTitle, showUserName);
    container.append(headerMain, containerQuestion);
    userName = inputText.value;

    showUserName.textContent += " [" + userName + "]";

}

/**
 * Función Buscar Preguntas por nivel
 * Esta funcioón realiza la busqueda de las preguntas que pertenecen a un nivel en especifico
 * estas tomadas de la data de questions.js
 */
function findQuestionsLevel(id) {

    questionsLevel.splice(0);
    questions.forEach((element) => {
        if (element.level === id) {
            questionsLevel.push(element);
        }

    });
    console.log(questionsLevel);
}

/**
 * Función Elegir Pregunta
 * Esta función realiza la selección de una pregunta de manera aleatoria  
 * con base en las preguntas encontradas por nivel en la funcion findQuestionsLevel
 */

function chooseQuestion() {

    n = Math.floor(Math.random() * 5);
    question_base = questionsLevel[n];
    category.innerHTML = question_base.category;
    question.innerHTML = question_base.question;
    numberLevel.textContent = level;
    numberScore.textContent = score;
    mixAnswers();

}

/**
 * Función MEzclar respuestas
 * Esta función realiza una mezcla de las respuestas encontradas para la pregunta actual en el sistema
 * esto se relaiza para que siempre que se repita la pregunta durante otra ronda, el orden de las opciones 
 * de respuesta sea difererente
 */
function mixAnswers() {
    possibleAnswers = [question_base.correctAnswer,
    question_base.wrongAnswerOne, question_base.wrongAnswerTwo,
    question_base.wrongAnswerThree];
    possibleAnswers.sort(() => Math.random() - 0.5);
    optionOne.innerHTML = possibleAnswers[0];
    optionTwo.innerHTML = possibleAnswers[1];
    optionThree.innerHTML = possibleAnswers[2];
    optionFour.innerHTML = possibleAnswers[3];
}

/**
 * Función oprimir Botón
 * @param {indice del boton } index
 * Esta función pérmite validar nsi opcion de respuesta elegida por el usuario es valida o no 
 * además realiza acciones en base a los resultados de dicha elección  
 */
function pushButton(index) {

    console.log(possibleAnswers[index]);
    if (possibleAnswers[index] === question_base.correctAnswer) {

        currentOptions[index].style.background = "lightgreen";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bien Hecho! Respuesta Correcta',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            reloadOptions();
        }, 1500);
        console.log(level);
        if (level === 5) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Felicitaciones, Haz Ganado!!!',
                text: userName + " Tu puntaje fue de " + score + " Puntos - FELICITACIONES!!!",
                showConfirmButton: false,
                timer: 4000
            })
            setTimeout(() => { location.reload() }, 4000);
            saveData();
        }
        level++;
        score += score * 2 + 50;
        findQuestionsLevel(level);
    } else {
        score = 0;
        currentOptions[index].style.background = "pink";
        setTimeout(() => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Triste! Respuesta Incorrecta - Inicia de Nuevo',
                showConfirmButton: false,
                timer: 4000
            })
        }, 1000);
        setTimeout(() => { location.reload() }, 4000);
        saveData();
    }

}

/**
 * Función refrescar Opciones
 * Debido a que el momento de marcar la pregunta, esta se marca con un color especifico, 
 * esta funcion perimite volver todas las opciones de respuesta al estado original (color blanco)
 */
function reloadOptions() {
    for (const opt of currentOptions) {
        opt.style.background = "white";
    }
    chooseQuestion();
}



/**
 * Función para retirarse del juego y posteriormente almacenar los datos de dicho jugador
 */
function exit() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te haz retirado!!!',
        text: userName + " Tu puntaje fue de " + score + " Puntos - HASTA PRONTO!!!",
        showConfirmButton: false,
        timer: 4000
    })
    setTimeout(() => { location.reload() }, 4000);
    saveData();
}

/**
 * Funcón para almacer los datos de los jugadores en LocalStorage para llegar un historial de jugadores 
 */
function saveData() {

    localStorage.setItem(userName, score);
}

/**
 * Función para mostrar los puntajes almacenados
 * Esta funcón es la encargada de recorrer y mostrar los datos almacenados en el LocalStorage para 
 * visualiozarlos en el histrial
 */


function data() {

    let removeChild = document.getElementById("container");
    while (removeChild.hasChildNodes()) {
        removeChild.removeChild(removeChild.firstChild);
    }

    let keys = Object.keys(localStorage);
    keys.forEach(element => {
        if (parseInt(localStorage.getItem(element)) || localStorage.getItem(element) == 0) {

            const tr = document.createElement("tr");
            const thUser = document.createElement("td");
            const thScore = document.createElement("td");
            thUser.textContent = element
            thScore.textContent = localStorage.getItem(element) + " Puntos";
            tr.appendChild(thUser);
            tr.appendChild(thScore);
            table.append(tr);

        }
        container.append(titleScore, table, btnPreview);
    });
}