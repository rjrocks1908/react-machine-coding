import { useState } from "react";

interface Props {
  list: number[];
  height: number;
  width: number;
  itemHeight: number;
}

function VirtualizedList({ list, height, width, itemHeight }: Props) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const startitem = Math.floor(scrollTop / itemHeight);
    const enditem = startitem + Math.floor(height / itemHeight);

    setIndices([startitem, enditem]);
  };

  return (
    <div
      style={{ height, width }}
      className="bg-gray-500 overflow-auto gap-1"
      onScroll={(e) => handleScroll(e)}
    >
      <div style={{ height: list.length * itemHeight }} className="relative">
        {list.slice(indices[0], indices[1] + 1).map((_, idx) => {
          const actualIndex = indices[0] + idx;
          return (
            <div
              key={actualIndex}
              style={{ height: itemHeight, top: actualIndex * itemHeight }}
              className="mb-2 px-2 bg-amber-600 border-t border-t-gray-700 absolute w-full"
            >{`Item ${actualIndex}`}</div>
          );
        })}
      </div>
    </div>
  );
}
export default VirtualizedList;
