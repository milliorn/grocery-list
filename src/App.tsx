import { JSX, useEffect, useState } from "react"
/* npm */
import Swal from "sweetalert2"
import { v4 as uuidv4 } from "uuid"
/* components */
import AddGroceryItem from "./components/AddGroceryItem"
import Header from "./components/Header"
import Items from "./components/Items"
/* props */
import { GroceryItemsProps } from "./props/GroceryItemsProps"

/**
 * Main application component.
 *
 * @returns JSX.Element
 */
function App(): JSX.Element {
  const [items, setItems] = useState<GroceryItemsProps[]>([])
  const [showItem, setShowItem] = useState(false)

  // Read from local storage once when the component mounts
  useEffect(() => {
    const storedGrocery = localStorage.getItem("itemAdded")
    // Instead of using a simple truthy check, explicitly ensure that storedGrocery is neither null nor empty
    if (storedGrocery !== null && storedGrocery !== "") {
      setItems(JSON.parse(storedGrocery) as GroceryItemsProps[])
    }
  }, [])

  /**
   * Create a new grocery item.
   *
   * @param item - an object containing item properties except id.
   */
  function createItem(item: Omit<GroceryItemsProps, "id">): void {
    const newItem: GroceryItemsProps = {
      id: uuidv4(),
      ...item // This will now include text and quantity from item
    }

    const updatedItems = [...items, newItem]
    setItems(updatedItems)

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item added!"
    })

    localStorage.setItem("itemAdded", JSON.stringify(updatedItems))
  }

  /**
   * Delete an item by id.
   *
   * @param id - the id of the item to delete.
   */
  function deleteItem(id: string): void {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item deleted!"
    })

    localStorage.setItem("itemAdded", JSON.stringify(updatedItems))
  }

  /**
   * Update an item by id.
   *
   * @param id - the id of the item to update.
   */
  function updateTask(id: string): void {
    // Use the nullish coalescing operator to assign default empty strings if prompt returns null.
    const text = prompt("Item Name") ?? ""
    const quantity = prompt("Quantity") ?? ""

    // Optionally, you could check if text or quantity are empty
    // and handle the case accordingly.

    // Update state using the current items
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text,
          quantity
        }
      }
      return item
    })

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item updated!"
    })

    localStorage.setItem("itemAdded", JSON.stringify(updatedItems))
    setItems(updatedItems) // Update state without reloading.
  }

  return (
    <div className="container min-h-20 max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-95 bg-zinc-900 p-7">
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
        <span className="text-xl leading-10">No items left!</span>
      )}
    </div>
  )
}

export default App
