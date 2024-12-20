# Slot Machine Game

## Overview
This project is a fun and interactive **Slot Machine Game** built using **React.js**. The game allows users to spin a set of three reels to match symbols. The player starts with a balance and tries their luck to win or lose points based on the reel outcome.

## Features
- **Realistic Reel Spinning Animation**: The reels spin dynamically to create a thrilling user experience.
- **Winning and Losing Mechanics**: 
  - If the symbols on the reels match, the player wins.
  - If the player's balance becomes 0, a popup notifies that they have lost.
- **Balance Tracking**: 
  - The current balance is displayed on the screen.
  - A "Total Balance" box shows cumulative earnings or losses.
- **Interactive Popups**: 
  - When the user wins, a popup asks if they want to play again.
  - Losing triggers a popup to notify the player and reset the game.
- **Responsive Design**: The layout is styled for seamless user interaction.

## How to Play
1. Start the game with an initial balance.
2. Click the "Spin" button to spin the reels.
3. If the symbols on all three reels match, you win 10 points, which are added to your total balance.
4. If the symbols don’t match, you lose 10 points, which are deducted from your total balance.
5. The game ends if your balance reaches 0.
6. Follow the prompts in the popups to decide whether to continue playing or end the game.

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd slot-machine-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
slot-machine-game/
├── src/
│   ├── components/
│   │   ├── SlotMachine.js    # Main game component
│   │   └── Popup.js          # Popup component for win/lose messages
│   ├── styles/
│   │   └── App.css           # CSS for styling the game
│   └── App.js                # Entry point of the application
├── public/
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Key Components
- **SlotMachine.js**: Handles game logic, balance updates, and reel spinning.
- **Popup.js**: Displays interactive popups for user feedback.

## Customization
You can tweak the following for different experiences:
- **Initial Balance**: Change the starting balance in the state.
- **Winning Criteria**: Modify the logic to set new winning conditions.
- **Reel Symbols**: Update the reel symbols to include new graphics or emojis.

## Technologies Used
- **React.js**: For building the user interface.
- **CSS3**: For styling the game and animations.
- **HTML5**: For structuring the application.

## Future Enhancements
- Add sound effects for spinning and winning/losing.
- Implement a leaderboard to track the highest scores.
- Add different levels of difficulty with varying rewards.

## License
This project is licensed under the MIT License. Feel free to modify and distribute it as per the license terms.

## Acknowledgments
- Special thanks to all contributors and resources that helped shape this project.

---

Enjoy spinning and good luck!
