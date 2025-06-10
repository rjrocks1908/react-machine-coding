import { useEffect, useState } from "react";
import Board from "./Board";

function TicTacToe({ size }: { size: number }) {
  const [grid, setGrid] = useState<string[][]>([]);
  const [isturnX, setIsturnX] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (grid.length === 0) {
      setGrid(Array.from({ length: size }, () => Array(size).fill("")));
      return;
    }

    if (grid.length !== size || grid.some((row) => row.length !== size)) return;

    // Helper to check if all elements in an array are the same and not empty
    const allSame = (arr: string[]) =>
      arr[0] !== "" && arr.every((cell) => cell === arr[0]);

    // Check rows and columns
    for (let i = 0; i < size; i++) {
      if (allSame(grid[i])) {
        setWinner(grid[i][0]);
        return;
      }
      const col = grid.map((row) => row[i]);
      if (allSame(col)) {
        setWinner(col[0]);
        return;
      }
    }

    // Check main diagonal
    const mainDiag = Array.from({ length: size }, (_, i) => grid[i][i]);
    if (allSame(mainDiag)) {
      setWinner(mainDiag[0]);
      return;
    }

    // Check anti-diagonal
    const antiDiag = Array.from(
      { length: size },
      (_, i) => grid[i][size - 1 - i]
    );
    if (allSame(antiDiag)) {
      setWinner(antiDiag[0]);
      return;
    }

    // Check for draw
    if (grid.flat().every((cell) => cell !== "")) {
      setWinner("Draw");
    }
  }, [grid, size]);

  const handleClick = (row: number, col: number) => {
    if (grid[row][col] !== "" || winner) {
      return;
    }

    setGrid((pgrid) => {
      const newgrid = [...pgrid];
      newgrid[row][col] = isturnX ? "X" : "O";

      return newgrid;
    });

    setIsturnX(!isturnX);
  };

  const handleReset = () => {
    setGrid(Array.from({ length: size }, () => Array(size).fill("")));
    setIsturnX(false);
    setWinner(null);
  };

  return (
    <div className="flex flex-col gap-1">
      {grid.length !== 0 && <Board grid={grid} handleClick={handleClick} />}
      <h5>
        {winner
          ? `${winner === "Draw" ? winner : `${winner} won the game`}`
          : `Current Turn: ${isturnX ? "X" : "O"}`}
      </h5>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default TicTacToe;
