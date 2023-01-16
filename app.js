const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const playGame = () => {
        const rockBtn = document.getElementById(`#tas`)
        const paperBtn = document.getElementById(`#kagıt`)
        const scissorBtn = document.getElementById(`#makas`)
        const playerOptions = [rockBtn,paperBtn,scissorBtn]
        const computerOptions = [`rock`,`paper`,`scissors`]
        playerOptions.forEach(option => {
            option.addEventListener(`click`,function(){
                const movesLeft = document.querySelector(`.eslesme`)
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`
                const choiceNumber = Math.floor(Math.random()*3)
                const computerChoice = computerOptions[choiceNumber]
                winner(this.innerText,computerChoice)
                if(moves == 10){
                    gameOver(playerOptions,movesLeft)
                }
            })
        })
    }
    const winner = (player,computer) => {
        const result = document.querySelector('.result')
        const playerScoreBoard 
    }
}