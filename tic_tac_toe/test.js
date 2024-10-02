const cells = document.querySelectorAll(".grid-item")
const turnDisplay = document.querySelector(".turnDisplay")
const resetBtn = document.getElementById("resetBtn").addEventListener("click", restartGame)




const player1 = "❌"
const player2 = "⭕"
let counter = 0

let player1Moves = []
let player2Moves = []

 const winners = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8], 
    [0,4,8]
];





 const startGame = () => cells.forEach((cell, index) =>{
     cell.addEventListener("click", box =>{
       
        box.target = playerTurns(box.target,index)
    })
 })
startGame()



function playerTurns(board,cellIndx){

   if(board.textContent !== ""){
        return null
   }    
    
    counter++
    if (counter % 2 === 0) {
        console.log("x prg ")
    
        turnDisplay.textContent = "Player 1(X) turn"
        board.textContent = player2


    } else if (counter % 2 !== 0 ) {
        console.log("o")
        turnDisplay.textContent = "Player 2(O) turn"
        board.textContent = player1
        
    }  
    gameState(board, cellIndx)
 
    
    
}

function gameState(board,cellIndx){

    if(board.textContent==="❌" ){
        player1Moves.push(cellIndx)
        checkWinner()
    } else if(board.textContent ==="⭕" ){
        player2Moves.push(cellIndx)
        checkWinner()
    }

}

function checkWinner(){

    
    if(player1Moves.length <= 2 && player2Moves.length + 1 <= 3) {
        
        
        return null
    } 

     for(let winCon of winners) {
        if(winCon.every(index => player1Moves.includes(index))) {
            
            turnDisplay.textContent= "Player1 WINS!"
            return
        }
    }


    for(let winCon of winners) {
        
        if(winCon.every(index => player2Moves.includes(index))) {
            turnDisplay.textContent= "Player2 WINS!"
            return
            
        } else if(player1Moves.length === 5 && player2Moves.length === 4){
            turnDisplay.textContent = "ITS A DRAW!"
        }
    }
    
   
    
}

function restartGame(){    
 
    cells.forEach(cell =>{
        cell.textContent = ""
    })
    
    turnDisplay.textContent = "Player 1(X) turn"
    player1Moves = []
    player2Moves = []
    counter = 0
    console.log(player1Moves)
    
    
    
}


