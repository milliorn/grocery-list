import { JSX, useState } from "react"
import Swal from "sweetalert2"
import { AddGroceryItemProps } from "../props/AddGroceryItemProps"

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
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault() // Prevent page reload on form submission

    // Validate the input: if both fields are empty, or one is missing,
    // trigger an appropriate error alert using SweetAlert2.
    if (!text && !quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add item and quantity or close the form."
      })
    } else if (!text && quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your item."
      })
    } else if (text && !quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your quantity."
      })
    } else {
      // If validation passes, call the provided onSave callback with the item data.
      onSave({ text, quantity })
    }

    // Reset the input fields after submission.
    setText("")
    setQuantity("")
  }

  return (
    <form className="mb-4 add-form" onSubmit={onSubmit}>
      {/* Input for the grocery item name */}
      <div className="mx-0 my-4 form-control">
        <label className="block text-xl sm:text-2xl md:text-3xl">Item</label>
        <input
          className="w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900 bg-white"
          type="text"
          placeholder="Example: Bread"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state on change
        />
      </div>

      {/* Input for the grocery item quantity */}
      <div className="mx-0 my-4 form-control">
        <label className="block text-xl sm:text-2xl md:text-3xl">
          Quantity
        </label>
        <input
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
        className="block w-full px-5 py-3 m-1 text-base no-underline border border-none rounded-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl btn btn-block bg-zinc-500 text-zinc-50 focus:text-zinc-50 focus:outline-none"
        value="Add Item"
      />
    </form>
  )
}

export default AddGroceryItem
