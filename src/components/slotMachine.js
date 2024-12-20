import React, { useRef, useState } from "react";
import Reel from "./Reel";
import SpinButton from "./SpinButton";
import randomize from "../utils/randomize";
import "../styles/slotMachine.css";
import spinSound from "../assets/spinning.mp3";

const SlotMachine = () => {
  const items = ["🎮", "🔫", "🛡️", "💊", "📦"]; // The symbols on the reels
  const [reels, setReels] = useState(["🎮", "🎮", "🎮"]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [balance, setBalance] = useState(10); // Balance for the current game
  const [totalBalance, setTotalBalance] = useState(100); // Total balance across games
  const [gameOver, setGameOver] = useState(false); // Game over flag
  const [winPopup, setWinPopup] = useState(false); // Win popup flag
  const reelContainerRef = useRef();

  const handleSpin = () => {
    if (balance <= 0) {
      alert("You have no balance left. Try again later.");
      return;
    }

    // Deduct balance on each spin
    setBalance(balance - 1);

    const spinAudio = new Audio(spinSound);
    spinAudio.loop = true;
    spinAudio.play();

    setIsSpinning(true);

    // Trigger spinning animation
    setReels((prevReels) => prevReels.map((item) => <Reel key={item} value={item} className="spinning" />));

    const reelContainer = reelContainerRef.current;
    const spinInterval = setInterval(() => {
      reelContainer.scrollTop = Math.random() * reelContainer.scrollHeight;
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      const newReels = randomize(items);
      setReels(newReels);
      setIsSpinning(false);
      spinAudio.pause();
      spinAudio.currentTime = 0;

      // Check for win/loss
      const result = checkWin(newReels);
      if (result === "win") {
        setBalance(balance + 10); // Add reward to balance
        setTotalBalance(totalBalance + 10); // Add 10 to total balance
        setWinPopup(true);
      } else {
        setTotalBalance(totalBalance - 10); // Deduct 10 from total balance on loss
        if (balance <= 0) {
          setGameOver(true); // Trigger game over popup if balance reaches 0
        }
      }

      // Ensure the reel settles on the result
      reelContainer.scrollTop = 0;

      // Stop the spinning animation after spin ends
      setReels(prevReels => prevReels.map((item) => <Reel key={item} value={item} className="stop-spin" />));

    }, 3000); // Spin duration: 3 seconds
  };

  const checkWin = (newReels) => {
    // Improved winning logic:
    // Check for any two symbols matching or all three for a win
    const [first, second, third] = newReels;
    if (first === second && second === third) {
      return "win"; // All symbols match
    } 
    else {
      return "lose";
    }
  };

  const handlePlayAgain = (response) => {
    // Reset the game
    setBalance(10); // Reset current balance
    setGameOver(false); // Hide the game over state
    setWinPopup(false); // Hide win popup
  };

  return (
    <div className="slot-machine-container">
      {/* Total balance displayed at the top-right */}
      <div className="total-balance">Total Balance: ${totalBalance}</div>

      <h1>Slot Machine Game</h1>
      <div className="slot-machine">
        <div className="reel-container" ref={reelContainerRef}>
          {reels.map((value, index) => (
            <Reel key={index} value={value} isSpinning={isSpinning} />
          ))}
        </div>
      </div>

      {!gameOver && (
        <>
          <SpinButton onClick={handleSpin} isSpinning={isSpinning} balance={balance} />
          <div className="balance">Balance: ${balance}</div>
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>You Lost the Game. Try again later.</h2>
        </div>
      )}

      {winPopup && !gameOver && (
        <div className="win-popup">
          <h2>You Win! Do you want to play again?</h2>
          <div className="win-buttons">
            <button onClick={() => handlePlayAgain("yes")}>Yes</button>
            <button onClick={() => handlePlayAgain("no")}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
