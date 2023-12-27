// * Inizializzo le variabili di cui necessito

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
// creo una variabile vuota dove inserire il conteggio dei click sulle celle
let cellCount = 0;
// creo una variabile booleana che possa cambiare al verificarsi di una condizione
let gameOver = false;

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
  // Se si verifica la condizione true, la cambio in false per poter ricliccare su genera griglia
  if (gameOver) {
    gameOver = false;
  }
  // creo un ciclo for che conti da 1 a il numero di celle ricavate dal livello di difficoltà
  for (let i = 1; i <= gridSize; i++) {
    console.log(gridSize);
    // per ogni giro crea una cella
    const cell = document.createElement("div");
    // gli assegna la classe cella
    cell.classList.add("cell");

    // inserisco questa condizione che in base alla difficoltà scelta, assegna una classe specifica che imposta la griglia
    if (levelGame == 3) {
      cell.classList.add("cell-hard");
    } else if (levelGame == 2) {
      cell.classList.add("cell-medium");
    } else {
      cell.classList.add("cell-easy");
    }

    // inserisce l'indice all'interno della cella
    cell.innerHTML = i;

    // al click della cella
    cell.addEventListener("click", function () {
      // Se gameOver è uguale a "true" non vengono eseguiti più click
      if (gameOver) {
        // esci dalla funzione
        return;
      }
      // inserisco un controllo affinché non venga contato più volte il click della stessa casella
      if (!cell.classList.contains("clicked")) {
        // incremento la variabile di 1 per poter segnare il punteggio
        cellCount++;
        // assegno una classe alla cella per poterla identificare ed evitare il click multiplo
        cell.classList.add("clicked");
      }
      console.log(cellCount);
      // Verifica se la cella è una bomba
      if (bombList.includes(i)) {
        // Se sì aggiunge la classe Bomb
        cell.classList.add("bomb");
        alert("Hai perso! Punteggio: " + (cellCount - 1));
        // reimposto il conteggio a zero
        cellCount = 0;
        gameOver = true;
      }
      // aggiunge la classe azure alla cella
      cell.classList.add("lightskyblue");
      if (gridSize - bombList.length == cellCount) {
        alert("Hai vinto! Punteggio: " + (cellCount - 1));

        // Cambio il valore della variabile in true in modo da evitare altri click dall'utente
        gameOver = true;
      }
      // visualizza l'indice della cella nella console
      console.log(i);
    });
    // aggiunge la cella alla grid
    grid.append(cell);
  }
}

// definisco una funzione che generi un array di bombe
function generateBombList() {
  // ogni volta che viene invocata la funzione svuoto l'array bomblist
  bombList = [];
  console.log(bombList);
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
