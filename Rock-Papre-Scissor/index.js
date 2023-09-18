let randomNumber,compMove,result='';
let showResult = document.getElementById('showResult');
let showSelection = document.getElementById('showSelection');
let resetButton = document.getElementById('reset-btn');

let score = JSON.parse(localStorage.getItem('score')) || {
    Wins:0,
    Losses:0,
    Ties:0
};



function randomPick(){
    randomNumber = Math.random();
        compMove = '';
        if(randomNumber>= 0 && randomNumber < 1/3){
            compMove='Rock'
        }
        else if(randomNumber >=1/3 && randomNumber < 2/3){
            compMove='Paper'
        }
        else if(randomNumber >=2/3 && randomNumber < 1){
            compMove='Scissors'
        }
        return compMove;
}


function playGame(userPick){
    updateScore()
    randomPick();
    
    if(userPick === 'Rock'){
        if(compMove === 'Rock'){
            result = 'Tie'
        }
        else if(compMove === 'Paper'){
            result= 'You Lose'
        }
        else if(compMove === 'Scissors'){
            result = 'You Won'
        }
        
    }
    else if(userPick === 'Paper'){
        if(compMove === 'Rock'){
            result = 'You Lose'
        }
        else if(compMove === 'Paper'){
            result= 'Tie'
        }
        else if(compMove === 'Scissors'){
            result = 'You Lose'
        }
    }
    else if( userPick === 'Scissors'){
        if(compMove === 'Rock'){
            result = 'You Lose'
        }
        else if(compMove === 'Paper'){
            result = 'You Won'
        }
        else if(compMove === 'Scissors'){
            result = 'Tie'
        }
    }

    if(result === 'You Won'){
        score.Wins++
    }
    else if(result === 'You Lose'){
        score.Losses++
    }
    else if(result === 'Tie'){
        score.Ties++
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    // alert(`You choose ${userPick}. Computer choose ${compMove}. ${result}\nWin: ${score.Wins}    Lost: ${score.Losses}    Tie: ${score.Ties}`);
}
