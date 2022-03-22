/*    
Consegna:
Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus:
Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
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

//Array di numeri casuali da 1 a 100
let array = [];

//Al click del bottone cambiamo la griglia selezionata in base alla difficoltà selezionata e iniziamo a giocare
start.addEventListener("click", function () {
    //Reset del contenuto interno alla griglia per nuova partita
    grid.innerHTML = "";

    //Aggiungo la classe "griglia" all'elemento grid
    grid.classList.add("griglia");
    //Rimuovo la classe none dall'elemento grid
    grid.classList.remove("none");
    //Aggiungo la classe none dall'elemento p
    paragrafo.classList.add("none")

    let numeroCelle;

    if (select.value == "semplice") {
        numeroCelle == 100;
    }else if (select.value == "intermedio") {
        numeroCelle == 81;
    }else {
        numeroCelle == 49;
    }

    for (let y = 1; y < numeroCelle + 1; y++) {
        array.push(y);    
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    array = shuffle(array);
    console.log(array);

    for (let i = 0; i < numeroCelle; i++) {
        let grid = document.getElementById("grid");

        let box = document.createElement("div");

        grid.appendChild(box);

        if (numeroCelle == 100) {
            box.classList.add("box-10");
        }else if (numeroCelle == 81) {
            box.classList.add("box-9");
        }else {
            box.classList.add("box-7");
        }

        box.innerHTML = `<span>${array[i]}</span>`;

        box.addEventListener("click", function() {
            this.classList.add("clicked");
        })
        
    }

})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }