import { useEffect, useState } from "react"
import type { JSX } from "react"
/* npm */
import Swal from "sweetalert2"
/* components */
import AddGroceryItem from "./components/AddGroceryItem"
import Header from "./components/Header"
import Items from "./components/Items"
/* props */
import type { GroceryItem } from "./props/GroceryItem"
/* constants */
import { STORAGE_KEY } from "./constants"

/**
 * Represents the data returned from the edit dialog.
 *
 * @property {string} text - The updated item name.
 * @property {string} quantity - The updated item quantity.
 */
type EditResult = { text: string; quantity: string }

/**
 * Main application component.
 *
 * @returns JSX.Element
 */
function App(): JSX.Element {
  const [items, setItems] = useState<GroceryItem[]>([])
  const [showItem, setShowItem] = useState(false)

  // Read from local storage once when the component mounts
  useEffect(() => {
    const storedGrocery = localStorage.getItem(STORAGE_KEY)
    if (storedGrocery !== null && storedGrocery !== "") {
      try {
        setItems(JSON.parse(storedGrocery) as GroceryItem[])
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  /**
   * Create a new grocery item.
   *
   * @param item - an object containing item properties except id.
   */
  function createItem(item: Omit<GroceryItem, "id">): void {
    const newItem: GroceryItem = {
      id: crypto.randomUUID(),
      ...item // Spread the caller-supplied fields (text, quantity) into the new item.
    }

    const previousItems = items
    const updatedItems = [...items, newItem]
    setItems(updatedItems)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
      void Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Item added!"
      })
    } catch {
      setItems(previousItems)
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to save item. Storage may be full."
      })
    }
  }

  /**
   * Delete an item by id.
   *
   * @param id - the id of the item to delete.
   */
  function deleteItem(id: string): void {
    const previousItems = items
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
      void Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Item deleted!"
      })
    } catch {
      setItems(previousItems)
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete item. Storage may be full."
      })
    }
  }

  /**
   * Update an item by id.
   *
   * @param id - the id of the item to update.
   * @returns A promise that resolves when the update is complete.
   */
  async function updateItem(id: string): Promise<void> {
    const current = items.find((item) => item.id === id)

    const { value, isConfirmed } = await Swal.fire<EditResult>({
      title: "Edit Item",
      html: `
        <input id="swal-text" class="swal2-input" placeholder="Item Name">
        <input id="swal-quantity" class="swal2-input" placeholder="Quantity">
      `,
      didOpen: (popup) => {
        const textInput = popup.querySelector(
          "#swal-text"
        ) as HTMLInputElement | null
        const quantityInput = popup.querySelector(
          "#swal-quantity"
        ) as HTMLInputElement | null

        if (textInput) {
          textInput.value = current?.text ?? ""
        }

        if (quantityInput) {
          quantityInput.value = current?.quantity ?? ""
        }
      },
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: (): EditResult | false => {
        const popup = Swal.getPopup()
        const text =
          (
            popup?.querySelector("#swal-text") as HTMLInputElement | null
          )?.value.trim() ?? ""
        const quantity =
          (
            popup?.querySelector("#swal-quantity") as HTMLInputElement | null
          )?.value.trim() ?? ""

        if (!text || !quantity) {
          Swal.showValidationMessage(
            "Both item name and quantity are required."
          )
          return false
        }

        return { text, quantity }
      }
    })

    if (!isConfirmed || value === undefined) {
      return
    }

    const previousItems = items
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, text: value.text, quantity: value.quantity }
        : item
    )

    setItems(updatedItems)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
      void Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Item updated!"
      })
    } catch {
      setItems(previousItems)
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update item. Storage may be full."
      })
    }
  }

  return (
    <main className="container min-h-20 max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 bg-zinc-900/95 p-7">
      <Header
        showForm={() => setShowItem((prev) => !prev)}
        changeTextAndColor={showItem}
      />

      {showItem && <AddGroceryItem onSave={createItem} />}

      <h2 className="mb-4 text-lg lg:mb-5 xl:mb-6 2xl:mb-7 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Items Remaining: {items.length}
      </h2>

      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} onEdit={updateItem} />
      ) : (
        <p className="text-xl leading-10">No items left!</p>
      )}
    </main>
  )
}

export default App
