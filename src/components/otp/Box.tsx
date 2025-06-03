import React, { useEffect, useRef, useState } from "react";

function Box({
  id,
  setOtp,
  inputRefs,
}: {
  id: number;
  setOtp: Function;
  inputRefs: React.MutableRefObject<HTMLInputElement[]>;
}) {
  const [num, setNum] = useState<string>("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRefs.current[id] = inputRef.current;
  }, [id, inputRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastDigit = value.charAt(value.length - 1);

    setNum(lastDigit);

    setOtp((prev: number[]) =>
      prev.map((otp, idx) => (idx === id ? parseInt(lastDigit) : otp))
    );

    if (value && id < 5) {
      inputRefs.current[id + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!e.currentTarget.value && id > 0) {
        inputRefs.current[id - 1]?.focus();
      }
    }
  };

  return (
    <div className="box">
      <input
        ref={inputRef}
        type="number"
        maxLength={1}
        className="otp"
        onChange={handleChange}
        value={num}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Box;
