import React, { useState } from 'react';
import './Accordion.css'; // Ensure this CSS file is linked

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open/close for each section
  };

  return (
    <div className="accordion">
      {['Section 1', 'Section 2', 'Section 3'].map((section, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{section}</h3>
            <span className="accordion-icon">
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          <div
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
          >
            <p>This is the content of {section}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
