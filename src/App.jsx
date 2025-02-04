import { useState, useEffect } from "react";
import ColorBox from "./components/colorbox";
import ColorOption from "./components/ColorOption";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import Loading from "./components/Loading";
import "./styles.css";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const App = () => {
  const [targetColor, setTargetColor] = useState("red");
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);
  const [fade, setFade] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
    setGameStatus("");
    setShowPopup(false);
    setScore(score && 0);
  };

  const handleGuess = (color) => {
    setFade(true);
    setTimeout(() => {
      if (color === targetColor) {
        setGameStatus("Correct! 🎉");
        setScore(score + 1);
        setTargetColor(colors[Math.floor(Math.random() * colors.length)]); // Automatically generate new color
      } else {
        setShowPopup(true);
        setScore(score && 0);
      }
      setFade(false);
    }, 500);
  };

  if (loading) {
    return <Loading />;
  }

  return (

    <div>
      <div className="game-container">
      <h1>Color Guessing Game</h1>
      <p data-testid="gameInstructions">Guess the correct color!</p>
      <ColorBox color={targetColor} fade={fade} />
      <Score score={score} />
      <ColorOption colors={colors} onGuess={handleGuess} />
      <GameStatus status={gameStatus} />
      <button onClick={startNewGame} data-testid="newGameButton">New Game</button>
      {showPopup && (
        <div className="popup">
          <p>You selected the wrong color! <br /> Try again..😥❌</p>
          <p>Make sure you select the correct matching colors.</p>
          <button onClick={startNewGame}>Restart Game</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;