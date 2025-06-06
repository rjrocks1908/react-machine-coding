import { useEffect, useState } from "react";

function ProgressBar() {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval running");

      setBar((prevBarValue) => {
        if (prevBarValue >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevBarValue + 1, 100);
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bar-container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="bar"
      ></div>
    </div>
  );
}
export default ProgressBar;
