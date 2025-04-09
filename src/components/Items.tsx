import { JSX } from "react";
import GroceryItem from "./GroceryItem";

/**
 *
 * @param param0
 * @returns
 */
function Items({ items, onDelete, onEdit }: any): JSX.Element {
  return (
    <>
      {items.map(
        (item: { id: any }): JSX.Element => (
          <GroceryItem
            item={item}
            key={item.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ),
      )}
    </>
  );
}

export default Items;
