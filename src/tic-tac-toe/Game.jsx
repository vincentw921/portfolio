import './Game.css';

import StartScreen from './StartScreen';

import { useState } from 'react';

// function Square( {value, onSquareClick} ) {
//   return (
//     <button 
//     className="square"
//     onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function checkWinner(squares) {
//   // Check if there is a winner on diagonals
//   if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {
//     return squares[0];
//   } if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {
//     return squares[2];
//   }

//   // Check if there is a winner on rows and columns
//   for (let i = 0; i < 3; i++) {
//     if (squares[i] && squares[i] === squares[i + 3] && squares[i] === squares[i + 6]) {
//       return squares[i];
//     }
//     if (squares[i * 3] && squares[i * 3] === squares[i * 3 + 1] && squares[i * 3] === squares[i * 3 + 2]) {
//       return squares[i * 3];
//     }
//   }
//   return null;
// }

// function Board( { isXNext, squares, onPlay } ) {

//   function handleClick(index) {
//     if (squares[index] || checkWinner(squares)) {
//       return;
//     }
//     const squaresCopy = squares.slice();
//     if (isXNext) {
//       squaresCopy[index] = 'X';
//     } else {
//       squaresCopy[index] = 'O';
//     }
//     onPlay(squaresCopy);
//   }

//   var squaresArr = squares.map((square, index) => {
//     return (
//       <Square value={square} key={index} onSquareClick={() => handleClick(index)} />
//     );
//   });

//   var boardObject = [];
//   for (let i = 0; i < 3; i++) {
//     boardObject.push(<div className="board-row" key={i}>
//       {squaresArr.splice(0, 3)}
//     </div>);
//   }

//   return (
//     <Fragment>
//       {boardObject}
//     </Fragment>
//   );
// }

// function GameBody( {setIsFinished} ) {
//   const [isXNext, setIsXNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [stepNumber, setStepNumber] = useState(0);
//   const currentSquares = history[stepNumber];

//   console.log(stepNumber);

//   function handlePlay(nextSquares) {
//     const newHistory = history.slice(0, stepNumber + 1);
//     setHistory([...newHistory, nextSquares]);
//     setStepNumber(newHistory.length);
//     setIsXNext(!isXNext);
//   }

//   let status;
//   const winner = checkWinner(currentSquares);
//   if (winner) {
//     status = 'Winner: ' + winner;
//     setIsFinished(winner);
//   } else {
//     status = 'Next player: ' + (isXNext ? 'X' : 'O');
//   }

//   return (
//     <div className="game">
//       <div className="game-body">
//         <div className="game-info">
//             {status}
//         </div>
//         <div className="game-board">
//           <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
//         </div>
//       </div>
//       <div>
//         <div className="game-button">
//           <button onClick={() => setStepNumber(Math.max(stepNumber - 1, 0))}>Undo</button>
//         </div>
//         <div className="game-button">
//           <button onClick={() => setStepNumber(Math.min(stepNumber + 1, history.length - 1))}>Redo</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Game() {
//     // const [gameStarted, setGameStarted] = useState(false);
//     // const [isFinished, setIsFinished] = useState(null);
//     return (
//         <StartScreen onStartClick={() => null} winner={false} onRestartClicked={() => null} />
//     );
//     // if (!gameStarted || isFinished) {
//     //     return (
//     //         <StartScreen onStartClick={() => setGameStarted(true)} winner={isFinished} onRestartClicked={() => setIsFinished(null)} />
//     //     );
//     // } else {
//     //     return (
//     //         <GameBody setIsFinished={setIsFinished} />
//     //     );
//     // }
// }

function Game() {
  return (
    <StartScreen />
  );
}

export default Game;