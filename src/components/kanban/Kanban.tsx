import { useRef, useState } from "react";

interface Props {
  initialData: { [key: string]: string[] };
}

function Kanban({ initialData }: Props) {
  const [data, setData] = useState(initialData);
  const dragKey = useRef("");
  const dragEntry = useRef("");

  const handleGragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLHeadingElement>,
    entry: string,
    key: string
  ) => {
    e.currentTarget.style.opacity = "0.5";
    dragKey.current = key;
    dragEntry.current = entry;
  };

  const handleDragEnd = (e: React.DragEvent<HTMLHeadingElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  const handleOnDrop = (targetKey: string) => {
    if (dragKey.current === targetKey) {
      return;
    }

    setData((prevData) => {
      const updatedData = { ...prevData };

      updatedData[dragKey.current] = updatedData[dragKey.current].filter(
        (entry) => entry !== dragEntry.current
      );
      updatedData[targetKey].push(dragEntry.current);
      return updatedData;
    });
  };

  return (
    <div className="bg-amber-800 flex flex-row gap-5 p-3 rounded-2xl">
      {Object.keys(data).map((key: string) => (
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-3xl">{key}</h2>
          <div
            className="flex flex-col gap-5 h-full w-full"
            onDragOver={handleGragOver}
            onDrop={() => handleOnDrop(key)}
          >
            {data[key].map((entry) => (
              <h4
                draggable
                onDragStart={(e) => handleDragStart(e, entry, key)}
                onDragEnd={handleDragEnd}
                className="bg-amber-600 p-4 cursor-grab select-none rounded-2xl"
              >
                {entry}
              </h4>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Kanban;
