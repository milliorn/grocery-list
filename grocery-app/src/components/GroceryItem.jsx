import { FaPencilAlt, FaTimes } from "react-icons/fa";

const GroceryItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <div className="item bg-zinc-100 rounded-md cursor-pointer flex justify-between	my-2 mx-auto max-w-full	overflow-scroll	py-3 px-5">
        <div>
          <p className="">
            <span className="itemBold">Item Name:</span> {item.text}
          </p>
          <p className="">
            <span className="itemBold">Quantity:</span> {item.quantity}
          </p>
        </div>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(item.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(item.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroceryItem;
