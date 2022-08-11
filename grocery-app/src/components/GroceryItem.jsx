import { FaPencilAlt, FaTimes } from "react-icons/fa";

const GroceryItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <div className="flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100">
        <div className="text-zinc-900">
          <p>
            <span className="font-bold itemBold">Item: </span>
            <span>{item.text}</span>
          </p>
          <p>
            <span className="font-bold itemBold">Quantity: </span>
            {item.quantity}
          </p>
        </div>
        <div>
          <p>
            <FaTimes
              onClick={() => onDelete(item.id)}
              className="my-1.5 text-red-500 cursor-pointer delIcon"
            />
          </p>
          <p>
            <FaPencilAlt
              onClick={() => onEdit(item.id)}
              className="my-1.5 text-blue-500 cursor-pointer editIcon"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroceryItem;
