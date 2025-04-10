/* react */
import { JSX, useEffect, useState } from "react";
/* npm */
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
/* components */
import AddGroceryItem from "./components/AddGroceryItem";
import Header from "./components/Header";
import Items from "./components/Items";

type GroceryItem = { id: string; text: string; quantity: string };

/**
 *
 * @returns JSX.Element
 */
function App(): JSX.Element {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [showItem, setShowItem] = useState(false);

  /* https://stackoverflow.com/a/46915314/11986604 */
  const storedGrocery = localStorage.getItem("itemAdded");

  // Parse stored items, or fall back to null if none are found
  const savedItems = storedGrocery
    ? (JSON.parse(storedGrocery) as GroceryItem[])
    : null;

  /**
   * Read
   */
  useEffect(() => {
    if (savedItems === null) {
      setItems([]);
    } else {
      setItems(savedItems);
    }
  }, [savedItems]);

  /**
   * Create
   * @param {*} item
   */
  function createItem(item: Omit<GroceryItem, "id">): void {
    const newItem: GroceryItem = { id: uuidv4(), ...item };

    setItems([...items, newItem]);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item added!",
    });

    localStorage.setItem("itemAdded", JSON.stringify([...items, newItem]));
  }

  /**
   * Delete
   * @param {*} id
   */
  function deleteItem(id: string): void {
    const deleteItem = items.filter((item) => item.id !== id);

    setItems(deleteItem);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item deleted!",
    });

    localStorage.setItem("itemAdded", JSON.stringify(deleteItem));
  }

  /**
   * Update
   * @param {*} id
   */
  function updateTask(id: string): void {
    const text = prompt("Item Name") || "";
    const quantity = prompt("Quantity") || "";

    const data = JSON.parse(
      localStorage.getItem("itemAdded")!
    ) as GroceryItem[];

    const myData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text,
          quantity,
          id: uuidv4(),
        };
      }
      return item;
    });

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item updated!",
    });

    localStorage.setItem("itemAdded", JSON.stringify(myData));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <div className="container max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-95 bg-zinc-900 p-7">
      <Header
        showForm={() => setShowItem(!showItem)}
        changeTextAndColor={showItem}
      />

      {showItem && <AddGroceryItem onSave={createItem} />}

      <h3 className="mb-4 text-lg lg:mb-5 xl:mb-6 2xl:mb-7 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Items Remaining: {items.length}
      </h3>

      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} onEdit={updateTask} />
      ) : (
        <span className="text-xl leading-10 ">No items left!</span>
      )}
    </div>
  );
}

export default App;
