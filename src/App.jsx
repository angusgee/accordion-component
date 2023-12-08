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

function Accordion() {}

function AccordionItem({ id, title, text }) {
  <p>{faqs.title}</p>;
}

function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default App;
