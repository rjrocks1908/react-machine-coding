import Accordion from "../components/accordion/Accordion";
import data from "../components/accordion/data.json";
import "../styles/accordion.css";

function AccordionPage() {
  return (
    <div className="container">
      <h1>FAQ's</h1>
      <div className="accordion">
        {data &&
          data["faqs"].map((faq) => <Accordion key={faq.question} faq={faq} />)}
      </div>
    </div>
  );
}
export default AccordionPage;
