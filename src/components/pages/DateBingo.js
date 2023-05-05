import 'semantic-ui-css/semantic.min.css';
import TomorrowIOWeatherWidget from "./Weather.js";
import '../../App.css';
import CloudImg from '../cloud-background.png';
import React, { useState } from "react";

const squares = [
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
  {
    front: <img src="./paint.png" alt="easel"/>,
    back: <img src="./paint-class.png" alt="painting date"/>,
   
  },
];
const BingoCard = ({ squares }) => {
  console.log(squares);
  const [flippedSquares, setFlippedSquares] = useState(Array(squares.length));

  const handleSquareClick = (index) => {
    setFlippedSquares((prev) => {
      const newFlippedSquares = [...prev];
      newFlippedSquares[index] = !newFlippedSquares[index];
      return newFlippedSquares;
    });
  };
return(
  <div className="db-container">
    <img className="cloud-background" src={CloudImg} alt="clouds" />
      <TomorrowIOWeatherWidget />
      <div className="legend">
        <div className="label">
          <img src="./legend-label.png" alt="legend" />
        </div>
        <div className="icons">
          <img src="./legend.png" alt="icon descriptions" />
        </div>
      </div>
    <div className="bingo-background">
      <div className="bingo-top"><img src="./bingo-card-top.png" alt="date bingo heading" /></div>
      <div className="bingo-card">
        {squares.map((square, index) => (
          <div
            key={index}
            className={`bingo-square ${flippedSquares[index] ? "flipped" : ""}`}
            onClick={() => handleSquareClick(index)}
          >
            <div className="bingo-front">{square.front}</div>
            <div className="bingo-back">{square.back}</div>
            
          </div>
        ))}
      </div>
    </div>
  </div>
   
)
};
export default function DateBingo() {
  return <BingoCard squares={squares} />;
}
