let gameSeq = [];
let userSeq = [];

let btns = ["red" ,"yellow" ,"green",  "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){ //keypress event that start the game
    if (started == false){
        started = true;

        levelUp();
    }
});

function btnFlash(btn){ //flash  button when user tap on button or game will genrate random color
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() { //maintain the level and genrate random color using math.random
    userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(randIdx);
    btnFlash(randBtn);
}

function checkAns(idx){ //check the enter button seq by user and game if its not match game over
    if ( userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        } 
    }else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br> press any key to start  .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress(){//when user press any button to store value to user seq
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for ( btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){ //Reset the all value and restart game
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}