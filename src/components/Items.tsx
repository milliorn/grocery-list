import GroceryItem from "./GroceryItem";

/**
 * 
 * @param param0 
 * @returns 
 */
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
