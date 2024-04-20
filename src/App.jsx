import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteItem(id) {
    setNotes((prev) => {
      return prev.filter((n, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((n, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
