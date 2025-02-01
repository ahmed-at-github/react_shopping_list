import { useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset;
  }

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  return (
    <>
      <h1>Beginners Project: Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to Buy</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, indx) => (
            <Item onRemoveItem={onRemoveItem} key={item + indx} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
