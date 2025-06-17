import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export interface Cell {
  id: number;
  number: number;
  isFlipped: boolean;
}

interface Props {
  GRID: Cell[];
}

function MemoryGame({ GRID }: Props) {
  const [isLock, setIsLock] = useState(false);
  const [currentFlipped, setCurrentFlipped] = useState<number[]>([]);
  const [grid, setGrid] = useState(GRID);

  useEffect(() => {
    if (currentFlipped.length === 2) {
      if (grid[currentFlipped[0]].number !== grid[currentFlipped[1]].number) {
        const copyCurrentFlipped = [...currentFlipped];
        setIsLock(true);
        setTimeout(() => {
          const copyGrid = [...grid];
          copyGrid[copyCurrentFlipped[0]] = {
            ...copyGrid[copyCurrentFlipped[0]],
            isFlipped: false,
          };
          copyGrid[copyCurrentFlipped[1]] = {
            ...copyGrid[copyCurrentFlipped[1]],
            isFlipped: false,
          };
          setGrid(copyGrid);
          setIsLock(false);
        }, 1000);
      }
      setCurrentFlipped([]);
    }
  }, [currentFlipped]);

  const handleClick = (id: number) => {
    if (grid[id].isFlipped || isLock) {
      return;
    }

    const copyGrid = [...grid];
    copyGrid[id] = { ...copyGrid[id], isFlipped: true };
    setGrid(copyGrid);
    setCurrentFlipped([...currentFlipped, id]);
  };

  return (
    <div className="grid grid-cols-6 gap-3">
      {grid.map((cell) => (
        <GameCard key={cell.id} cell={cell} onClick={handleClick} />
      ))}
    </div>
  );
}
export default MemoryGame;
