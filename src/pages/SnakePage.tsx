import Snake from "../components/snake/Snake";

function SnakePage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Snake gridSize={15} />
    </div>
  );
}
export default SnakePage;
