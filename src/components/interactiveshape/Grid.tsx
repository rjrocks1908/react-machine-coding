import type { Cell } from "./InteractiveShape";

interface Props {
  grid: Cell[][];
  handleClick: Function;
}

function Grid({ grid, handleClick }: Props) {
  return (
    <div>
      {grid.map((row, rowidx) => (
        <div className="row" key={rowidx}>
          {row.map((cell, cellidx) => (
            <div
              key={cellidx}
              className={`cell ${cell.status ? "active" : ""}`}
              onClick={() => handleClick(cell.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
