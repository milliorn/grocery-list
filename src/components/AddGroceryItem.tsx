import { useState } from "react"
import type { JSX, SyntheticEvent } from "react"
import Swal from "sweetalert2"
import type { AddGroceryItemProps } from "../props/AddGroceryItemProps"

/**
 * AddGroceryItem component renders a form that collects item and quantity inputs.
 * It performs basic validation and notifies the user of missing values with alerts.
 *
 * @param {AddGroceryItemProps} props - Component properties.
 * @returns {JSX.Element} The rendered form component.
 */
function AddGroceryItem({ onSave }: AddGroceryItemProps): JSX.Element {
  // Local state for the item name and quantity input fields.
  const [text, setText] = useState("")
  const [quantity, setQuantity] = useState("")

  /**
   * Event handler for form submission.
   * Validates input fields and triggers onSave if both item and quantity are provided.
   *
   * @param {SyntheticEvent<HTMLFormElement>} e - The form submission event.
   */
  function onSubmit(e: SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault() // Prevent page reload on form submission

    const trimmedText = text.trim()
    const trimmedQuantity = quantity.trim()

    // Validate the input: if both fields are empty, or one is missing,
    // trigger an appropriate error alert using SweetAlert2.
    if (!trimmedText && !trimmedQuantity) {
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add item and quantity or close the form."
      })
    } else if (!trimmedText && trimmedQuantity) {
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your item."
      })
    } else if (trimmedText && !trimmedQuantity) {
      void Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your quantity."
      })
    } else {
      // If validation passes, call the provided onSave callback with the item data.
      onSave({ text: trimmedText, quantity: trimmedQuantity })

      // Reset the input fields only after a successful submission.
      setText("")
      setQuantity("")
    }
  }

  return (
    <form className="mb-4 add-form" onSubmit={onSubmit}>
      {/* Input for the grocery item name */}
      <div className="mx-0 my-4 form-control">
        <label
          htmlFor="item-text"
          className="block text-xl sm:text-2xl md:text-3xl"
        >
          Item
        </label>
        <input
          id="item-text"
          className="w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900 bg-white"
          type="text"
          placeholder="Example: Bread"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state on change
        />
      </div>

      {/* Input for the grocery item quantity */}
      <div className="mx-0 my-4 form-control">
        <label
          htmlFor="item-quantity"
          className="block text-xl sm:text-2xl md:text-3xl"
        >
          Quantity
        </label>
        <input
          id="item-quantity"
          className="w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900 bg-white"
          type="text"
          placeholder="Example: 1 loaf"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)} // Update quantity state on change
        />
      </div>

      {/* Submit button to add the item */}
      <input
        type="submit"
        className="block w-full px-5 py-3 m-1 text-base no-underline border border-none rounded-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl btn btn-block bg-zinc-600 text-zinc-50 focus:text-zinc-50 focus:outline-none"
        value="Add Item"
      />
    </form>
  )
}

export default AddGroceryItem
