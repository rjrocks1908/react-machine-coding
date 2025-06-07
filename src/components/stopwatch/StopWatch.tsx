import { useEffect, useRef, useState } from "react";

interface Time {
  second: string;
  minute: string;
  hour: string;
}

const type = {
  SECOND: "SECOND",
  MINUTE: "MINUTE",
  HOUR: "HOUR",
};

function StopWatch() {
  const [time, setTime] = useState<Time>({
    second: "",
    minute: "",
    hour: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prev) => {
          let hour = parseInt(prev.hour);
          let minute = parseInt(prev.minute);
          let second = parseInt(prev.second);

          second--;
          if (second < 0) {
            minute--;
            second = 59;
            if (minute < 0) {
              hour--;
              minute = 59;
              if (hour < 0) {
                clearInterval(interval);
                setIsRunning(false);
                return {
                  second: "",
                  minute: "",
                  hour: "",
                };
              }
            }
          }

          return {
            hour: hour.toString(),
            minute: minute.toString(),
            second: second.toString(),
          };
        });
      }, 1000);

      intervalRef.current = interval;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    wtype: string
  ) => {
    const val = parseInt(e.target.value);

    let h = 0;
    let m = 0;
    let s = 0;

    if (wtype == type.SECOND) {
      if (time.hour.length != 0) h = parseInt(time.hour);
      if (time.minute.length != 0) m = parseInt(time.minute);

      if (val > 60) {
        s = 60;
      } else {
        s = val;
      }
    }

    if (wtype == type.MINUTE) {
      if (time.hour.length != 0) h = parseInt(time.hour);
      if (time.second.length != 0) s = parseInt(time.second);

      if (val > 60) {
        m = 60;
      } else {
        m = val;
      }
    }

    if (wtype == type.HOUR) {
      if (time.minute.length != 0) m = parseInt(time.minute);
      if (time.second.length != 0) s = parseInt(time.second);

      if (val > 24) {
        h = 24;
      } else {
        h = val;
      }
    }

    setTime({
      hour: h.toString(),
      minute: m.toString(),
      second: s.toString(),
    });
  };

  const handleStart = () => {
    if (
      time.hour.length == 0 &&
      time.minute.length == 0 &&
      time.second.length == 0
    ) {
      return;
    }

    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({
      second: "",
      minute: "",
      hour: "",
    });
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="stopwatch">
      {/* Input */}
      <div className="stopwatch-input">
        <input
          type="number"
          placeholder="HH"
          onChange={(e) => handleChange(e, type.HOUR)}
          value={time.hour}
          disabled={isRunning}
        />
        {":"}
        <input
          type="number"
          placeholder="MM"
          onChange={(e) => handleChange(e, type.MINUTE)}
          value={time.minute}
          disabled={isRunning}
        />
        {":"}
        <input
          type="number"
          placeholder="SS"
          onChange={(e) => handleChange(e, type.SECOND)}
          value={time.second}
          disabled={isRunning}
        />
      </div>

      {/* Buttons */}
      <div className="stopwatch-buttons">
        <button onClick={() => handleStart()}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
}
export default StopWatch;
