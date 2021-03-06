/*
Consegna
Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

//Selezionare elementi DOM
//Selezionare il bottone di inizio
let start = document.getElementById("btn");

//Selezioniamo select difficoltà
let select = document.getElementById("facile");

//Selezioniamo griglia
let grid = document.getElementById("grid");
//Creazione del box interno alla griglia
let box = document.createElement("div");

//Selezionare p nella griglia
let paragrafo = document.getElementById("welcome");
//seleziono main
let mainSize = document.getElementById("mainid");

//Array di numeri casuali da 1 a 100
let array = [];
//Array per le bombe
let arrayBombe = [];
//Array 16 bombe
let sediciBombe = [];
//per ciclare box e richiamarle
let arrayCelle = [];
//contatore click
let win = 0;
//celle buone
let celleUtili = 0;


//Al click del bottone cambiamo la griglia selezionata in base alla difficoltà selezionata e iniziamo a giocare
start.addEventListener("click", function () {
    //Reset del contenuto interno alla griglia per nuova partita
    grid.innerHTML = "";

    //Aggiungo la classe "griglia" all'elemento grid
    //grid.classList.add("griglia");
    //Rimuovo la classe none dall'elemento grid
    grid.classList.remove("none");
    //Aggiungo la classe none dall'elemento p
    paragrafo.classList.add("none");
    //rimuovo altezza fissa main al click
    mainSize.classList.remove("mainclass")

    let numeroCelle;

    if (select.value == "semplice") {
        numeroCelle = 100;
    }else if (select.value == "intermedio") {
        numeroCelle = 81;
    }else {
        numeroCelle = 49;
    }

    celleUtili = numeroCelle - 16

    for (let y = 1; y < numeroCelle + 1; y++) {
        array.push(y);    
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    array = shuffle(array);
    console.log(array);

    //Generare le bombe in base alla difficoltà e al numero di celle
    for ( k = 0; k < numeroCelle; k++ ) {
        arrayBombe.push(k);    
    }

    arrayBombe = shuffle(arrayBombe);
    console.log(`Le bombe sono: ${arrayBombe}`);

    for (let bombe = 0; bombe < 16; bombe++) {
        sediciBombe.push(arrayBombe[bombe]);  
    }

    console.log(`Le bombe sono: ${sediciBombe}`);

    for (let l = 0; l < array.length; l++) {
        arrayCelle.push(
           document.createElement("div")
        ) 
        
    }

    for (let i = 0; i < numeroCelle; i++) {
        let grid = document.getElementById("grid");

        grid.appendChild(arrayCelle[i]);

        if (numeroCelle == 100) {
            arrayCelle[i].classList.add("box-10");
        }else if (numeroCelle == 81) {
            arrayCelle[i].classList.add("box-9");
        }else {
            arrayCelle[i].classList.add("box-7");
        }

        arrayCelle[i].innerHTML = `<span>${array[i]}</span>`;

        arrayCelle[i].addEventListener("click", clickBox);
    }

})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function clickBox() {
    console.log(this.innerText);

        if (sediciBombe.includes(parseInt(this.innerText))) {
            this.classList.add("bomba");
            endGame();
        }else {
            this.classList.add("clicked");
            win++
            if (celleUtili == win) {
                endGame();
            }
            
        }
}

function endGame() {
    for (let i = 0; i < arrayCelle.length; i++) {
        arrayCelle[i].removeEventListener("click", clickBox) 
    }
    console.log(win);     
}

