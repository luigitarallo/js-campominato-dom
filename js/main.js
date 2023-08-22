// inizializzo le variabili di cui necessito

// prendo l'elemento button con ID dall'html e lo associo ad una variabile
const buttonCreate = document.getElementById("create-grid");

// prendo l'elemento div con ID grid e lo associo ad una variabile
const grid = document.getElementById("grid");

// creo una variabile vuota dove inserire la selezione dell'utente al click
let levelGame = 0;
// creo una variabile vuota dove inserire la dimensione della griglia calcolata
let gridSize = 0;
// creo una variabile vuota dove inserire la lista di bombe
let bombList = [];

// al click del bottone associo una funzione che genera una griglia
buttonCreate.addEventListener("click", function () {
  // ogni volta che clicco il tasto svuoto la grid
  grid.innerHTML = "";

  levelGame = document.getElementById("difficulty").value;
  if (levelGame == 3) {
    gridSize = 7 * 7;
  } else if (levelGame == 2) {
    gridSize = 9 * 9;
  } else {
    gridSize = 10 * 10;
  }
  generateBombList();
  generateGrid();
});

// definisco la funzione generateGrid()
function generateGrid() {
  // creo un ciclo for che conti da 1 a il numero di celle ricavate dal livello di difficoltà
  for (let i = 1; i <= gridSize; i++) {
    console.log(gridSize);
    // per ogni giro crea una cella
    const cell = document.createElement("div");
    // gli assegna la classe cella
    cell.classList.add("cell");
    if (levelGame == 3) {
      cell.classList.add("cell-hard");
    } else if (levelGame == 2) {
      cell.classList.add("cell-medium");
    } else {
      cell.classList.add("cell-easy");
    }
    // Verifica se la cella è una bomba

    // inserisce l'indice all'interno della cella
    cell.innerHTML = i;

    // al click della cella
    cell.addEventListener("click", function () {
      // aggiunge la classe azure alla cella
      if (bombList.includes(i)) {
        cell.classList.add("bomb");
      }
      cell.classList.add("lightskyblue");
      // visualizza l'indice della cella nella console
      console.log(i);
    });
    //   aggiunge la cella alla grid
    grid.append(cell);
  }
}

// definisco una funzione che generi un array di bombe
function generateBombList() {
  // ogni volta che viene invocata la funzione svuoto l'array bomblist
  bombList = [];
  // creo un ciclo finché la lunghezza dell'array bomblist non sia di 16 elementi
  while (bombList.length < 16) {
    // ad ogni giro inserisco un numero random nella variabile bombcell che va da "1" a "il numero di celle create in base alla difficoltà"
    const bombCell = Math.floor(Math.random() * gridSize + 1);
    // aggiungo la condizione che nel caso in cui nell'array non sia già presente la cella...
    if (!bombList.includes(bombCell)) {
      //  la includo con il push nell'array
      bombList.push(bombCell);
    }
  }
}

console.log(bombList);
