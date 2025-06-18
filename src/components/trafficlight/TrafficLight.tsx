import { useEffect, useState } from "react";

const lights = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

function TrafficLight() {
  const [currentActiveLight, setCurrentActiveLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActiveLight((prev) => (prev + 1) % lights.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-40 h-80 bg-gray-700 flex flex-col justify-evenly items-center rounded-3xl">
      {lights.map((light, idx) => (
        <div
          className={`size-16 border border-white rounded-full ${
            currentActiveLight === idx ? light : "bg-transparent"
          }`}
        ></div>
      ))}
    </div>
  );
}
export default TrafficLight;
