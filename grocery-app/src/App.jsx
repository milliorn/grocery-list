import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import AddGroceryItem from "./components/AddGroceryItem";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);
  const [showItem, setShowItem] = useState(false);

  const getGrocery = JSON.parse(localStorage.getItem("itemAdded"));

  /**
   * Read
   */
  useEffect(() => {
    if (getGrocery == null) {
      setItems([]);
    } else {
      setItems(getGrocery);
    }
    // eslint-disable-next-line
  }, []);

  /**
   * Create
   * @param {*} item
   */
  const createItem = (item) => {
    const id = uuidv4();
    const newItem = { id, ...item };

    setItems([...items, newItem]);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item added!",
    });

    localStorage.setItem("itemAdded", JSON.stringify([...items, newItem]));
  };

  /**
   * Delete
   * @param {*} id
   */
  const deleteItem = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);

    setItems(deleteItem);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item deleted!",
    });

    localStorage.setItem("itemAdded", JSON.stringify(deleteItem));
  };

  /**
   * Update
   * @param {*} id
   */
  const updateTask = (id) => {
    const text = prompt("Item Name");
    const quantity = prompt("Quantity");
    const data = JSON.parse(localStorage.getItem("itemAdded"));

    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          quantity: quantity,
          id: uuidv4(),
        };
      }
      return x;
    });

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item updated!",
    });

    localStorage.setItem("itemAdded", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <>
      <div className="container max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-95 bg-zinc-900 p-7">
        <Header
          showForm={() => setShowItem(!showItem)}
          changeTextAndColor={showItem}
        />

        {showItem && <AddGroceryItem onSave={createItem} />}

        <h3>Items Remaining: {items.length}</h3>

        {items.length > 0 ? (
          <Items items={items} onDelete={deleteItem} onEdit={updateTask} />
        ) : (
          "No items left!"
        )}
      </div>
    </>
  );
}

export default App;
