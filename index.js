
let player={
    name:"user",
    chips:100
}
let cards
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
let playerNameInput=document.getElementById("player-name")

function submitName(){
    let name=playerNameInput.value.trim()
    if(name){
        player.name=name
        playerEl.textContent=player.name + ": $" + player.chips
    } else{
        alert("Please enter a valid name.")
    }
    playerNameInput.value=""
    
}

//playerEl.textContent=player.name + ": $" + player.chips

function chips(won){
    if(won){
        player.chips+=200
    } else{
        player.chips-=20
    }
    playerEl.textContent=player.name + ": $" + player.chips
}
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    return randomNumber>10?10 :randomNumber===1?11 :randomNumber
}

function startGame(){
    isAlive=true
    hasBlackJack=false
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}
function renderGame(){
if(sum<21){
    message="Do you want to draw a new card?"
} else if(sum===21){
    message="You've got a BlackJack!"
    hasBlackJack=true
    chips(true)
} else{
    message="You're out of the game!"
    isAlive=false
    chips(false)
    
}
messageEl.textContent=message
sumEl.textContent="Sum: " + sum
cardsEl.textContent="Cards: "
for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
    }
//console.log("Drawing a new card from the deck!")
}