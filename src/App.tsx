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
/* constants */
import { STORAGE_KEY } from "./constants"

type EditResult = { text: string; quantity: string }

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
    const storedGrocery = localStorage.getItem(STORAGE_KEY)
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
  }

  /**
   * Update an item by id.
   *
   * @param id - the id of the item to update.
   */
  async function updateTask(id: string): Promise<void> {
    const current = items.find((item) => item.id === id)

    const { value, isConfirmed } = await Swal.fire<EditResult>({
      title: "Edit Item",
      html: `
        <input id="swal-text" class="swal2-input" placeholder="Item Name" value="${current?.text ?? ""}">
        <input id="swal-quantity" class="swal2-input" placeholder="Quantity" value="${current?.quantity ?? ""}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: (): EditResult | false => {
        const text = (document.getElementById("swal-text") as HTMLInputElement).value.trim()
        const quantity = (document.getElementById("swal-quantity") as HTMLInputElement).value.trim()

        if (!text || !quantity) {
          Swal.showValidationMessage("Both item name and quantity are required.")
          return false
        }

        return { text, quantity }
      }
    })

    if (!isConfirmed || value === undefined) {
      return
    }

    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text: value.text, quantity: value.quantity } : item
    )

    setItems(updatedItems)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item updated!"
    })
  }

  return (
    <main className="container min-h-20 max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-95 bg-zinc-900 p-7">
      <Header
        showForm={() => setShowItem((prev) => !prev)}
        changeTextAndColor={showItem}
      />

      {showItem && <AddGroceryItem onSave={createItem} />}

      <h2 className="mb-4 text-lg lg:mb-5 xl:mb-6 2xl:mb-7 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Items Remaining: {items.length}
      </h2>

      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} onEdit={updateTask} />
      ) : (
        <span className="text-xl leading-10">No items left!</span>
      )}
    </main>
  )
}

export default App
