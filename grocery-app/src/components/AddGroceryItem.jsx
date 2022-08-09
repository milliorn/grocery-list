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
    <form className="add-form mb-4" onSubmit={onSubmit}>
      <div className="form-control my-4 mx-0">
        <label className="block">Item</label>
        <input
          type="text"
          placeholder="Example: Bread"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control my-4 mx-0">
        <label className="block">Quantity</label>
        <input
          type="text"
          placeholder="Example: 1 loaf"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddGroceryItem;
