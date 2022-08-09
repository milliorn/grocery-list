import GroceryItem from "./GroceryItem";
import "../index.css";

const Items = ({ items, onDelete, onEdit }) => {
  return (
    <>
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Items;
