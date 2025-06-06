import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

function Accordion({ faq }: { faq: FAQ }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="accordion-container">
      <div className="head">
        <span>{faq.question}</span>
        <span
          style={{ cursor: "pointer", padding: "0 1rem" }}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? "+" : "-"}
        </span>
      </div>

      {!isCollapsed && <div className="hidden">{faq.answer}</div>}
    </div>
  );
}
export default Accordion;
