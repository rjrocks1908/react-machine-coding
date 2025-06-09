import InteractiveShape from "../components/interactiveshape/InteractiveShape";
import "../styles/interactiveshape.css"

function InteractiveShapePage() {
  return (
    <div className="ishape-container">
      <InteractiveShape gridRow={3} gridCol={3} />
    </div>
  );
}
export default InteractiveShapePage;
