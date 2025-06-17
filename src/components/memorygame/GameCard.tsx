import type { Cell } from "./MemoryGame";

interface Props {
  cell: Cell;
  onClick: (id: number) => void;
}

function GameCard({ cell, onClick }: Props) {
  return (
    <div
      className={`p-3 ${
        cell.isFlipped ? "bg-amber-800" : "bg-amber-600"
      } aspect-square text-center cursor-pointer hover:bg-amber-800 transition-all rounded-xl`}
      onClick={() => onClick(cell.id)}
    >
      {cell.isFlipped ? cell.number : "?"}
    </div>
  );
}
export default GameCard;
