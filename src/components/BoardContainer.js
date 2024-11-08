import React, { useState } from "react";
import BoardItem from "./BoardItem";

function BoardContainer() {
  const [xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));

  const clickHandle = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    if (winner === "Tie") {
      status = winner;
    } else {
      status = "Winner: " + winner;
    }
  }

  const restartOnClick = () => {
    if (!status) {
      return;
    }

    setSquares(Array(9).fill(null));
  };

  return (
    <div
      className="justify-center items-center content-center flex h-screen"
      onClick={restartOnClick}
    >
      {status ? (
        <div className="text-7xl max-md:text-5xl font-bold absolute bg-blur bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800 opacity-85 text-white rounded-xl h-max w-max p-8">
          {status}
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-rows-3 grid-flow-col">
        <div className="border-r-8  border-b-8 border-black">
          <BoardItem
            value={squares[0]}
            onClickHandle={() => {
              clickHandle(0);
            }}
          />
        </div>
        <div className="border-r-8 border-black">
          <BoardItem
            value={squares[1]}
            onClickHandle={() => {
              clickHandle(1);
            }}
          />
        </div>
        <div className="border-r-8 border-t-8 border-black">
          <BoardItem
            value={squares[2]}
            onClickHandle={() => {
              clickHandle(2);
            }}
          />
        </div>
        <div className="border-r-8 border-b-8 border-black">
          <BoardItem
            value={squares[3]}
            onClickHandle={() => {
              clickHandle(3);
            }}
          />
        </div>
        <div className="border-r-8 border-black">
          <BoardItem
            value={squares[4]}
            onClickHandle={() => {
              clickHandle(4);
            }}
          />
        </div>
        <div className="border-t-8 border-r-8 border-black">
          <BoardItem
            value={squares[5]}
            onClickHandle={() => {
              clickHandle(5);
            }}
          />
        </div>
        <div className="border-b-8 border-black">
          <BoardItem
            value={squares[6]}
            onClickHandle={() => {
              clickHandle(6);
            }}
          />
        </div>
        <div className="">
          <BoardItem
            value={squares[7]}
            onClickHandle={() => {
              clickHandle(7);
            }}
          />
        </div>
        <div className="border-t-8 border-black">
          <BoardItem
            value={squares[8]}
            onClickHandle={() => {
              clickHandle(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (!squares.includes(null)) {
    return "Tie";
  }
  return null;
}

export default BoardContainer;
