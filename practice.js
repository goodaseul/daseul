//랜덤번호 저장 - -
//번호 입력 그리고 go 버튼 누름 -
//랜덤번호 맞추면 맞췄습니다! -
//랜덤번호 < 유저번호 DOwn! -
//랜덤번호 > 유저번호 Up! -
//Reset 버튼 누를 시 게임 리셋 -
//기회는 5번 게임 끝남 (go X) -
//1~100 범위 밖 입력시 alert. 기회 날리지 않음 -
//유저가 이미 입력한 거를 또 입력하면 알려준다, 기회 날리지 않음 -

let randomNumber = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver =false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function (){userInput.value = ""})

function randomNum (){
    randomNumber = Math.floor(Math.random () * 100) + 1;
    console.log(randomNumber)
}
function play (){
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100){
        alert('1~100 범위 숫자를 입력해주세요.');
        return
    }
    if(history.includes(userValue)){
        alert("입력이 된 숫자입니다.")
        return;
    }
    chances --;
    chanceArea.innerText = `남은 찬스: ${chances}번`
    if(chances < 1){
        gameOver = true;
    }
    if(chances == 5){
        chances --;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }

    history.push(userValue);
    console.log(userValue);
    if( randomNumber < userValue){
        resultArea.innerText = "Down !"
    }else if (randomNumber > userValue){
        resultArea.innerText = "Up !"
    }else{
        resultArea.innerText = "Correct !"
        gameOver = true;
    }
}
function reset(){
    userInput.value = "";
    resultArea.innerText = "결과가 나온다";
    chances = 5;
    chanceArea.innerText = "남은기회:5번";
    playButton.disabled = false;
    randomNum();
}

randomNum ()