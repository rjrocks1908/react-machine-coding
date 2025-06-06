import { useState } from "react";
import ProgressBar from "../components/progressbar/ProgressBar";
import "../styles/progressbar.css";

function ProgressBarPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      {toggle && <ProgressBar />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
export default ProgressBarPage;
