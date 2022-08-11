import { useState } from "react";
import Swal from "sweetalert2";

const AddGroceryItem = ({ onSave }) => {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text && !quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add item and quantity or close the form.",
      });
    } else if (!text && quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your item.",
      });
    } else if (text && !quantity) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Add your quantity.",
      });
    } else {
      onSave({ text, quantity });
    }

    setText("");
    setQuantity("");
  };

  return (
    <form className="mb-4 add-form" onSubmit={onSubmit}>
      <div className="mx-0 my-4 form-control">
        <label className="block">Item</label>
        <input
          className="w-full h-10 px-2 py-1 m-1 text-xs focus:outline-none text-zinc-900"
          type="text"
          placeholder="Example: Bread"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mx-0 my-4 form-control">
        <label className="block">Quantity</label>
        <input
          className="w-full h-10 px-2 py-1 m-1 text-xs focus:outline-none text-zinc-900"
          type="text"
          placeholder="Example: 1 loaf"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <input
        type="submit"
        className="block inline-block w-full px-5 py-3 m-1 text-sm no-underline border border-none rounded-md cursor-pointer btn btn-block bg-zinc-500 text-zinc-50 focus:text-zinc-50 focus:outline-none"
        value="Save Task"
      />
    </form>
  );
};

export default AddGroceryItem;
