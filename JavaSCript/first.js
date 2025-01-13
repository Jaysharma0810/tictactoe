let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGamebtn = document.querySelector(".newGame");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO=true;//playercX,playerO
let count=0;


const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("green");
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkwinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(box of boxes){
    box.disabled=true;
    };
};
const enableboxes=()=>{
    for(box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText =`Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

    

};
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            };
        };
    };
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);