/* eslint-disable react/prop-types */

import { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "Where are the chairs assembled?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus suscipit orci, id varius magna pulvinar non. Nam nisi massa.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus suscipit orci, id varius magna pulvinar non. Nam nisi massa.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus suscipit orci, id varius magna pulvinar non. Nam nisi massa.",
  },
];

function Accordion({ data }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentlyOpen={currentlyOpen}
          onOpen={setCurrentlyOpen}
          key={el.id}
          title={el.title}
          text={el.text}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, currentlyOpen, onOpen, children }) {
  const isOpen = num === currentlyOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
