let box = document.querySelector("box");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let body = document.querySelector("body");
let h3 = document.querySelector(".lev");
let maxS = document.querySelector(".maxScore");
let gameSeq = [];
let userSeq = [];
let btns = [one, two, three, four];
let started = false;
let level = 0;
let score = 0;
let maxScore = 0;
let rand = function () {
    return Math.floor(Math.random()*4);
}
function flash(box){
    box.classList.add("flashy");
    setTimeout(function(){
        box.classList.remove("flashy");
    }, 250); 
}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;
    let n = rand();
    flash(btns[n]);
    gameSeq.push(btns[n]);
}
document.addEventListener("keypress", ()=>{
    if(started==false){
        started = true;
        levelUp();
    }
});
document.addEventListener("click", ()=>{
    if(started==false){
        started = true;
        levelUp();
    }
});
function checkAns(i){
    if(userSeq[i]==gameSeq[i]){
        if(i==gameSeq.length-1){
            setTimeout(levelUp, 1000);
        }
    } else{
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        }, 100);
        score = gameSeq.length;
        if(score>maxScore)
            maxScore=score;
        maxS.innerText = `Max. Score = ${maxScore}`
        h3.innerHTML = `Game Over! Your final score was <b>${score}<b><br>Press any key to start again.`;
        reset();
    }
}
function btnPress(){
    let btn = this;
    flash(btn);
    userSeq.push(btn);
    checkAns(userSeq.length-1);
}
for(b of btns){
    b.addEventListener("click", btnPress);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level=0;
    score=0;
}
