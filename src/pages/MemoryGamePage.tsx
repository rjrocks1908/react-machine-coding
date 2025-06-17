import MemoryGame from "../components/memorygame/MemoryGame";

function shuffleArray(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}

function generateRandomGrid() {
  const arr = Array.from({ length: 18 }, (_, idx) => idx + 1);
  const grid = shuffleArray([...arr, ...arr]);

  const newGrid = grid.map((item, idx) => {
    return { id: idx, number: item, isFlipped: false };
  });

  return newGrid;
}

function MemoryGamePage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <MemoryGame GRID={generateRandomGrid()} />
    </div>
  );
}
export default MemoryGamePage;
