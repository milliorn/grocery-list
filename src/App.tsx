import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import AddGroceryItem from "./components/AddGroceryItem";
import Header from "./components/Header";
import Items from "./components/Items";

/**
 *
 * @returns JSX.Element
 */
function App(): JSX.Element {
  const [items, setItems] = useState<any[]>([]);
  const [showItem, setShowItem] = useState(false);

  /* https://stackoverflow.com/a/46915314/11986604 */
  const getGrocery = JSON.parse(localStorage.getItem("itemAdded")!);

  /**
   * Read
   */
  useEffect(() => {
    if (getGrocery === null) {
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
  function createItem(item: any): void {
    const id = uuidv4();
    const newItem = { id, ...item };

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
  function deleteItem(id: any): void {
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
  function updateTask(id: any): void {
    const text = prompt("Item Name");
    const quantity = prompt("Quantity");
    const data = JSON.parse(localStorage.getItem("itemAdded")!);

    const myData = data.map((x: { id: any }) => {
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
