import { useState } from "react";
import './DropdownText.css';

function DropdownText({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="faq-toggle">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Dropdown({ faqs }) {
  return (
    <div className="faq-container">
      {faqs.map((faq, idx) => (
        <DropdownText key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
