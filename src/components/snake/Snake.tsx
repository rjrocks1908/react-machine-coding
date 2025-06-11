import { useEffect, useRef, useState } from "react";
import SnakeBoard from "./SnakeBoard";

const getFloorValue = (val: number) => Math.floor(val);

const DIRECTIONS = {
  UP: [1, 0],
  RIGHT: [0, 1],
  LEFT: [0, -1],
  DOWN: [-1, 0],
};

const generateRandomPosition = (gridSize: number) => [
  getFloorValue(Math.random() * gridSize),
  getFloorValue(Math.random() * gridSize),
];

function Snake({ gridSize }: { gridSize: number }) {
  const INITIAL_BODY = [
    [getFloorValue(gridSize / 2), getFloorValue(gridSize / 2)],
  ];
  const [snakeBody, setSnakeBody] = useState<number[][]>(INITIAL_BODY);
  const directionRef = useRef(DIRECTIONS.RIGHT);

  const generateSnakeFood = () => {
    while (true) {
      const pos = generateRandomPosition(gridSize);
      if (snakeBody.some(([r, c]) => r == pos[0] && c == pos[1])) continue;
      else return pos;
    }
  };

  const snakeFood = useRef(generateSnakeFood());

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakeBody((prevSnakeBody) => {
        const newHead = [
          prevSnakeBody[0][0] + directionRef.current[0],
          prevSnakeBody[0][1] + directionRef.current[1],
        ];

        // Player is killed the snake
        if (
          newHead[0] < 0 ||
          newHead[0] >= gridSize ||
          newHead[1] < 0 ||
          newHead[1] > gridSize ||
          prevSnakeBody.some(([r, c]) => newHead[0] == r && newHead[1] == c)
        ) {
          directionRef.current = DIRECTIONS.RIGHT;
          return INITIAL_BODY;
        }

        const newSnakeBody = [...prevSnakeBody];

        if (
          newHead[0] == snakeFood.current[0] &&
          newHead[1] == snakeFood.current[1]
        ) {
          snakeFood.current = generateSnakeFood();
        } else {
          newSnakeBody.pop();
        }

        newSnakeBody.unshift(newHead);

        return newSnakeBody;
      });

      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  useEffect(() => {
    const handleDirections = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key);
      if (key === "ArrowUp" && directionRef.current[0] !== 1) {
        directionRef.current = DIRECTIONS.UP;
      } else if (key === "ArrowRight" && directionRef.current[1] !== 1) {
        directionRef.current = DIRECTIONS.RIGHT;
      } else if (key === "ArrowDown" && directionRef.current[0] !== -1) {
        directionRef.current = DIRECTIONS.DOWN;
      } else if (key === "ArrowLeft" && directionRef.current[1] !== -1) {
        directionRef.current = DIRECTIONS.LEFT;
      }
    };

    window.addEventListener("keydown", handleDirections);

    return () => {
      window.removeEventListener("keydown", handleDirections);
    };
  }, []);

  return (
    <div className="border">
      {
        <SnakeBoard
          gridSize={gridSize}
          foodPos={snakeFood.current}
          snakeBody={snakeBody}
        />
      }
    </div>
  );
}
export default Snake;
