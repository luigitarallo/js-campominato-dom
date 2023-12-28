# CAMPO MINATO

- This exercise involved creating a grid-based game using JavaScript. Here's how it has helped me improve:

1. **DOM Manipulation**: This exercise required extensive manipulation of the Document Object Model (DOM). I learned how to create, modify, and append HTML elements dynamically using JavaScript.

2. **Event Handling**: I gained experience in handling user events, such as clicks. This included adding event listeners to elements and defining event handler functions.

3. **Conditional Logic**: The game logic required the use of conditional statements to check the state of the game and respond accordingly. This helped me understand and apply complex logical conditions in JavaScript.

4. **Looping Constructs**: I used various looping constructs to iterate over arrays and generate HTML elements. This helped me understand the nuances of different loops and when to use them.

5. **Random Number Generation**: The game involved generating random numbers to place bombs on the grid. This helped me understand how to use the Math object in JavaScript for random number generation.

6. **Game Logic Development**: Developing the game logic helped me understand how to translate real-world rules into code. It also improved my problem-solving skills and ability to write complex algorithms.

7. **Debugging Skills**: Debugging was a significant part of this exercise. I learned how to use `console.log` effectively to track variables and understand the flow of the program.

In conclusion, this JavaScript exercise has been instrumental in improving my coding skills and understanding of JavaScript. I look forward to applying these skills in future projects.

## Technologies and Libraries

- HTML
- CSS
- Fontawesome
- Bootstrap
- JavaScript ES6

## Traccia

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento

**Generazione Bombe**

- Creo una funzione ch generi 16 numeri casuali che rientrino nel numero di celle impostato tramite la difficoltà e controllando che l'indice generato non sia già presente
  - salvo la lista delle bombe generata
- Quando clicco sul tasto per generare la griglia invoco anche la funzione che generi randomicamente le bombe

**Svolgimento gioco**

- Ad ogni click della casella imposto un contatore che si incrementa di 1 **SE** la casella non è stata già cliccata, in questo modo segno il punteggio senza che l'utente possa barare

- **SE** il click avviene in una casella che contiene una bomba, aggiunge la classe _bomb_ e visualizzo un messaggio con il punteggio ottenuto e impedisco altri possibili click da parte dell'utente

- **SE** vengono cliccate tutte le caselle senza bomba il gioco termina annunciando il punteggio ottenuto

## ScreenShot

![Alt text](/img/minefield-screenshot.png)
