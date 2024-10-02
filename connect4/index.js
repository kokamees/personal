
const container = document.querySelector(".game-container")
const turnDisplay = document.getElementById("turnDisplay")
const restartBtn = document.querySelector(".restartBtn")

const player1 = "YELLOW"
const player2 = "RED"
let counter = 0;


const board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            
        ]        

initBoard()        

function initBoard(){

    for(let row = 0; row < 6; row++) {
        for(let col = 0; col < 7; col++) {
           const box = document.createElement("div")
           box.classList.add("ring")
           box.id = `ring-${row + 1}-${col + 1}`
           box.addEventListener("click",ringClick)
        
           container.appendChild(box)
        }
        
    }
    
}

function ringClick(event){
    const ring = event.target
    const box = event.currentTarget

    nextTurn(ring,box)
}






function nextTurn(ring,box){
    
    counter++
    

    if(counter % 2 ===0){
        turnDisplay.textContent = "yellow's turn"
        displayLowest(box.id,player2)
        
    }else {
        turnDisplay.textContent = "red's turn"
        displayLowest(box.id,player1)
        
        
    }
}

function displayLowest(id,player){
    const all = document.querySelectorAll(".ring")
    
    let colNr = Number(id.charAt(7)-1) // -1 to match the indexes(starting from 0)
    const rowNr = Number(id.charAt(5))

    for(let row = 5; row >= 0; row--) {
        if(board[row][colNr] === null) {
            
            board[row][colNr] = player
            index = row  * 7 + colNr;
            all[index].style.backgroundColor = player
            checkWinner(player,colNr)
            return
        }
    }
    
   
}



function checkWinner(player,colNr){
   
    // horizontally (starts from top)
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < 4; j++){
            if(board[i][j] !== null && 
                board[i][j] === board[i][j+1] && 
                board[i][j+1] === board[i][j+2] && 
                board[i][j+2] === board[i][j+3] 
            ) {
                 
                turnDisplay.textContent = `${player} IS THE WINNER!`
                restartBtn.textContent = "PLAY AGAIN"
                closeGame()
                return true
            }
        }
    }

    // vertically ( starts from the bottom)
    for(let i = 5; i > 3; i--) {
         if(board[i][colNr] !== null &&
            board[i][colNr]=== board[i-1][colNr] &&
            board[i-1][colNr] === board[i-2][colNr] &&
            board[i-2][colNr] === board[i-3][colNr]
           ) {
             closeGame()
            turnDisplay.textContent = `${player} IS THE WINNER!`
            restartBtn.textContent = "PLAY AGAIN"
            return true
         }

    }
    // a-diagonally
    
    for(let i = 0; i < board.length - 3; i++) {
        for(let j = 0; j < 3; j++) {
             if(board[i][j] !== null &&
                board[i][j] === board[i+1][j+1] &&
                board[i+1][j+1] === board[i+2][j+2] && 
                board[i+2][j+2] === board[i+3][j+3]
            ){
                closeGame()
                turnDisplay.textContent = `${player} IS THE WINNER!`
                restartBtn.textContent = "PLAY AGAIN"
                return true
             }
        }
    }
    // diagonally 
    for(let i = 3; i < board.length; i++){
        for(let j = 0; j < 4; j++) {
            console.log(j)
            if(board[i][j] !== null &&
                board[i][j] === board[i-1][j+1] && 
                board[i-1][j+1] === board[i-2][j+2] && 
                board[i-2][j+2] === board[i-3][j+3]
            ) {
                console.log("winner")
                closeGame()
                turnDisplay.textContent = `${player} IS THE WINNER!`
                restartBtn.textContent = "PLAY AGAIN"
                return true
            }
        }
    }

    return false
}

function closeGame(){


    const rings = document.querySelectorAll(".ring")
    rings.forEach(ring =>{
        ring.removeEventListener("click", ringClick)
    })
}


function restartGame(){

    closeGame()

    const rings = document.querySelectorAll(".ring")
    
    rings.forEach(ring => {
        ring.style.backgroundColor = ""
        ring.addEventListener("click",ringClick)
    
    })
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = null; 
        }
    }

    turnDisplay.textContent = "yellow's turn"
    restartBtn.textContent = "RESTART GAME"
    counter = 0
    
}
