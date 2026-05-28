# BlackJack Game 🎰

A simple and interactive BlackJack card game built with vanilla JavaScript, HTML, and CSS. Play against the dealer and try to get a sum of 21 without going over!

## Project Overview

This is a beginner-friendly BlackJack game designed to expand JavaScript understanding and hands-on experience with DOM manipulation, game logic, and interactive user interfaces.

## Features

✨ **Core Gameplay**
- Player name customization before starting the game
- Deal initial two cards to the player
- Draw additional cards on demand
- Real-time calculation of card sum
- Win/lose conditions

💰 **Chip System**
- Start with 100 chips
- Win 200 chips when you get BlackJack (sum = 21)
- Lose 20 chips when you bust (sum > 21)
- Track your chip balance throughout the game

🎨 **User Interface**
- Clean and intuitive design with a casino table background
- Responsive button controls
- Real-time game status messages
- Display of current cards and sum
- Player information with chip count

## How to Play

1. **Enter Your Name**: Type your name in the input field and click "Submit"
2. **Start the Game**: Click the "Start Game" button to receive your first two cards
3. **Game Logic**:
   - If your sum is **less than 21**: You'll see the prompt "Do you want to draw a new card?"
   - If your sum equals **21**: You've got a BlackJack! You win chips
   - If your sum exceeds **21**: You're busted! You lose chips
4. **Draw Cards**: Click "New Card" to draw additional cards (if you're still in the game)
5. **Repeat**: Start a new game to play again

## Card Values

- **Number Cards (2-10)**: Face value
- **Face Cards (J, Q, K)**: Worth 10 points
- **Ace (A)**: Worth 11 points (or 1 if needed to avoid busting)

## Project Structure

```
BlackJack_game/
├── index.html       # Main HTML structure
├── index.css        # Styling and layout
├── index.js         # Game logic and functionality
├── README.md        # Project documentation
└── images/          # Background images
    └── table2.jpg   # Casino table background
```

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, layout, and background design
- **JavaScript (ES6)**: Game logic, DOM manipulation, and event handling

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Dhodduraaj/BlackJack_game.git
   ```

2. Open `index.html` in your web browser

3. Enter your name and start playing!

## Browser Compatibility

This game works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript

## Learning Outcomes

This project demonstrates:
- DOM manipulation and event handling
- JavaScript object and array usage
- Conditional logic and game state management
- Function design and code organization
- CSS styling and layout techniques
- User input validation

## Author

**Dhodduraaj** - Created as a learning project to expand JavaScript knowledge and hands-on experience

## License

This project is open source and available for educational purposes.

---

**Enjoy playing BlackJack!** 🎴♠️♥️♦️♣️
