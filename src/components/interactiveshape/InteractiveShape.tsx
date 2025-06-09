import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

export interface Cell {
  id: string;
  status: boolean;
}

function InteractiveShape({
  gridRow,
  gridCol,
}: {
  gridRow: number;
  gridCol: number;
}) {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const queueRef = useRef<string[]>([]);
  const timeRef = useRef<number | null>(null);

  useEffect(() => {
    const grid = [];

    for (let i = 0; i < gridRow; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < gridCol; j++) {
        const cell: Cell = { id: `${i},${j}`, status: false };
        row.push(cell);
      }
      grid.push(row);
    }

    setGrid(grid);
  }, []);

  const makeCellsToDefault = () => {
    let idx = 0;
    timeRef.current = setInterval(() => {
      const id = queueRef.current[idx];
      if (id) {
        const coordinates = id.split(",");
        const r = parseInt(coordinates[0]);
        const c = parseInt(coordinates[1]);

        setGrid((pgrid) => {
          const newgrid = [...pgrid];

          newgrid[r][c] = { ...newgrid[r][c], status: false };

          return newgrid;
        });
        idx++;
      } else {
        if (timeRef.current) clearInterval(timeRef.current);
        queueRef.current = [];
      }
    }, 1000);
  };

  const handleClick = (id: string) => {
    if (queueRef.current.length !== gridCol * gridRow) {
      const coordinates = id.split(",");
      const r = parseInt(coordinates[0]);
      const c = parseInt(coordinates[1]);

      setGrid((pgrid) => {
        const newgrid = [...pgrid];

        newgrid[r][c] = { ...newgrid[r][c], status: true };

        return newgrid;
      });

      queueRef.current.push(id);

      if (queueRef.current.length == gridCol * gridRow) {
        makeCellsToDefault();
      }
    }
  };

  return (
    <div>
      <Grid grid={grid} handleClick={handleClick} />
    </div>
  );
}
export default InteractiveShape;
