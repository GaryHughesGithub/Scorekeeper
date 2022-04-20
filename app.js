const player1Button = document.querySelector('#p1btn');
const player2Button = document.querySelector('#p2btn');
const player1Score = document.querySelector('#player1Score')
const player2Score = document.querySelector('#player2Score')
const reset = document.querySelector('#reset')
const scoreSelect = document.querySelector('#scoreSelect')


let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

player1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            player1Score.classList.add('has-text-success')
            player2Score.classList.add('has-text-danger')
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        player1Score.textContent = p1Score;
    }   
})


player2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;  
            player2Score.classList.add('has-text-success')
            player1Score.classList.add('has-text-danger')
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        player2Score.textContent = p2Score;
    }
})

scoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset();
})


reset.addEventListener('click', resetGame)

function resetGame() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove('has-text-success','has-text-danger')
    player2Score.classList.remove('has-text-success','has-text-danger')
    player1Button.disabled = false;
    player2Button.disabled = false;
}