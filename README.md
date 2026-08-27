# 🧠 Tic-Tac-Toe Game — Internal Structure

This project is a simple implementation of the classic Tic-Tac-Toe game using **HTML**, **CSS**, and **JavaScript**. Below is a breakdown of the internal structure and logic used to power the game.

---

## 📁 Files and Their Purpose

* `index.html`: Defines the structure of the web page, including the game board, buttons, and result text.
* `style.css`: Provides the visual styling of the game using modern gradients and flex/grid layout.
* `script.js`: Implements all the game logic (player turns, win/draw conditions, game reset, etc.).

---

## ⚙️ JavaScript Logic Breakdown (`script.js`)

### 1. **Selecting Elements**

```js
let resetgame = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let boxes = document.querySelectorAll(".box");
let para = document.querySelector("#para");
```

These selectors reference the reset/new buttons, all game boxes, and the result paragraph.

---

### 2. **Game State**

```js
let myturnX = true;
const winning_positionsa_array = [ [...], ... ];
```

* `myturnX` keeps track of the current player (`true` for X, `false` for O).
* `winning_positionsa_array` stores all the 8 possible win combinations (rows, columns, diagonals).

---

### 3. **Handling Clicks**

```js
function handle(box) {
  if (box.innerText === "") {
    box.innerText = myturnX ? "X" : "0";
    myturnX = !myturnX;
  }
}
```

When a box is clicked, the player's symbol is filled in, and the turn is toggled.

---

### 4. **Checking for a Winner**

```js
function winner() {
  for (let array1 of winning_positionsa_array) {
    let [val1, val2, val3] = array1.map(i => boxes[i].innerText);
    if (val1 && val1 === val2 && val2 === val3) {
      para.innerText = val1 === "X" ? "The winner is: Player X" : "The winner is: Player 0";
      boxesdisabled();
      return;
    }
  }
}
```

The function checks each winning combination to see if the same symbol appears in all three positions. If so, it declares the winner.

---

### 5. **Draw Condition (Optional)**

```js
let allFilled = [...boxes].every(box => box.innerText !== "");
if (allFilled) {
  para.innerText = "It's a draw!";
}
```

This code ensures that if all boxes are filled and no winner is found, the game results in a draw.

---

### 6. **Disabling and Resetting**

```js
function boxesdisabled() {
  boxes.forEach(box => box.disabled = true);
}

function reset() {
  boxes.forEach(box => box.disabled = false);
}

function new2() {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
  });
}
```

* `boxesdisabled()`: Prevents further clicks after game ends.
* `reset()`: Re-enables the boxes without clearing the board.
* `new2()`: Resets both the box text and disabled state (starts a fresh game).

---

### 7. **Event Binding**

```js
boxes.forEach((box) => {
  box.disabled = false;
  box.addEventListener("click", () => {
    handle(box);
    winner();
  });
});
```

Sets up the click logic for each box and initializes the game.

---

## 🧩 Summary

* The game uses simple DOM manipulation and condition checking to implement game rules.
* The layout is styled responsively with clean visual feedback.
* Draw and win scenarios are dynamically handled based on board state.

