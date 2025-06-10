interface Props {
  grid: string[][];
  handleClick: Function;
}

function Board({ grid, handleClick }: Props) {
  return (
    <div>
      {grid.map((row, ridx) => (
        <div className="flex flex-row" key={ridx}>
          {row.map((cell, cidx) => (
            <div
              className="w-24 h-24 border m-2 flex items-center justify-center text-4xl cursor-pointer hover:bg-gray-800 transition-all"
              key={`${ridx}${cidx}`}
              onClick={() => handleClick(ridx, cidx)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Board;
