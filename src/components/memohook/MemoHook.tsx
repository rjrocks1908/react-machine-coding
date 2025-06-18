import { useState } from "react";
import { useCustomMemo } from "../../hooks/useCustomMemo";

function expensiveOperation(counter: number) {
  console.log("Operating");
  for (let i = 0; i < 1000000; i++) {}
  return counter * 2;
}

function MemoHook() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const doubleCount = useCustomMemo(() => {
    return expensiveOperation(counter);
  }, [counter]);

  return (
    <div>
      <div>Counter: {counter}</div>

      <div>Double Count: {doubleCount}</div>

      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
export default MemoHook;
