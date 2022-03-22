//Generare una griglia di gioco quadrata
//In cui ogni cella contiene un numero tra 1 e 100
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

let grid = document.getElementById('grid');

for ( let i=1; i <= 100; i++){
 
  let box = document.createElement('div');
  box.innerHTML +=  i;
  box.classList.add('box');
  grid.appendChild(box);


  box.addEventListener('click', function(){
    console.log(this);
    this.classList.add('clicked');
    console.log(this.innerHTML);
    let numero = this.innerHTML;

  });

}