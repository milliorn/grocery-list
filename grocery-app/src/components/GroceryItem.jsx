import { FaPencilAlt, FaTimes } from "react-icons/fa";

const GroceryItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <div className="item">
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
