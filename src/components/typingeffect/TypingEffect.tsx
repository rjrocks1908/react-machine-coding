import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  delay: number;
}

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

function TypingEffect({ text, delay }: Props) {
  const [dynamicText, setDynamicText] = useState("");
  const direction = useRef(DIRECTION.RIGHT);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicText((prevText) => {
        const updatedText = prevText.split("");

        if (direction.current === DIRECTION.RIGHT) {
          if (updatedText.length < text.length) {
            updatedText.push(text[updatedText.length]);
          } else {
            direction.current = DIRECTION.LEFT;
          }
        } else {
          if (updatedText.length > 0) {
            updatedText.pop();
          } else {
            direction.current = DIRECTION.RIGHT;
          }
        }

        return updatedText.join("");
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="text-3xl text-amber-600">{dynamicText}|</div>;
}
export default TypingEffect;
