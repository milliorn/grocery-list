import { JSX, useState } from "react"
import Swal from "sweetalert2"
import { AddGroceryItemProps } from "../props/AddGroceryItemProps"

function AddGroceryItem({ onSave }: AddGroceryItemProps): JSX.Element {
  const [text, setText] = useState("")
  const [quantity, setQuantity] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

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
      onSave({ text, quantity })
    }

    setText("")
    setQuantity("")
  }

  return (
    <form className="mb-4 add-form" onSubmit={onSubmit}>
      <div className="mx-0 my-4 form-control">
        <label className="block text-xl sm:text-2xl md:text-3xl">Item</label>
        <input
          className="w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900"
          type="text"
          placeholder="Example: Bread"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mx-0 my-4 form-control">
        <label className="block text-xl sm:text-2xl md:text-3xl">
          Quantity
        </label>
        <input
          className="w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900"
          type="text"
          placeholder="Example: 1 loaf"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <input
        type="submit"
        className="block w-full px-5 py-3 m-1 text-base no-underline border border-none rounded-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl btn btn-block bg-zinc-500 text-zinc-50 focus:text-zinc-50 focus:outline-none"
        value="Add Item"
      />
    </form>
  )
}

export default AddGroceryItem
