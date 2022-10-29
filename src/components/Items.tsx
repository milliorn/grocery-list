import GroceryItem from "./GroceryItem";

function Items({ items, onDelete, onEdit }: any): JSX.Element {
  return (
    <>
      {items.map((item: { id: any }) => (
        <GroceryItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}

export default Items;
