import { useEffect, useState } from "react";

interface Props {
  gridSize: number;
  foodPos: number[];
  snakeBody: number[][];
}

function SnakeBoard({ gridSize, foodPos, snakeBody }: Props) {
  const [board, setBoard] = useState<number[][]>([]);

  useEffect(() => {
    setBoard(Array.from({ length: gridSize }, () => Array(gridSize).fill(0)));
  }, [gridSize]);

  return (
    <div className="flex flex-col-reverse">
      {board &&
        board.map((row, ridx) => (
          <div key={ridx} className="flex flex-row">
            {row.map((_, cidx) => (
              <div
                key={`${ridx}${cidx}`}
                className={`w-5 h-5 ${
                  ridx === foodPos[0] && cidx === foodPos[1]
                    ? "bg-red-500 rounded-full"
                    : snakeBody.some(([r, c]) => r === ridx && c === cidx)
                    ? "bg-green-500"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
export default SnakeBoard;
