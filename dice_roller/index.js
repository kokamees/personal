


function rollDice(){

const value = document.getElementById("inputNum").value


const diceArr= [];
const diceImg= [];

for(let i=0; i < value; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    
    
    diceArr.push(dice)
    diceImg.push(`<img src="dice_images/Dice-${dice}.png">`)

}

 const display = document.getElementById("dice")
 const displayImg = document.getElementById("diceImages")
 

display.textContent = `Dice: ${diceArr.join(`, `)}`

displayImg.innerHTML = diceImg.join("")


}