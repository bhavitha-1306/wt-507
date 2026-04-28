import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load from local storage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = input;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      {items.length === 0 ? (
        <p>No items yet :)</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;