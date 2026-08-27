let resetgame = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let boxes = document.querySelectorAll(".box");
let para = document.querySelector("#para");

let myturnX = true;

const winning_positionsa_array = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 4, 2],
    [6, 7, 8]
];

function handle(box) {
    if (box.innerText === "") {
        box.innerText = myturnX ? "X" : "0";
        myturnX = !myturnX;
        winner(); // Check winner right after move
    }
}

function boxesdisabled() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function winner() {
    for (let array1 of winning_positionsa_array) {
        let val1 = boxes[array1[0]].innerText;
        let val2 = boxes[array1[1]].innerText;
        let val3 = boxes[array1[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            para.innerText = val1 === "X" ? "The winner is: Player X" : "The winner is: Player 0";
            boxesdisabled();
            return;
        }
    }

    // Check for draw
    let allFilled = [...boxes].every(box => box.innerText !== "");  //unpacking the boxes in array 
    if (allFilled) {
        para.innerText = "It's a draw!";
    }
}

function resetGame() {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    para.innerText = "";
    myturnX = true;
}

// Initialize game
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        handle(box);
    });
});

resetgame.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);
