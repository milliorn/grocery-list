import { JSX } from "react";
import GroceryItem from "./GroceryItem";
import { ItemsProps } from "../props/ItemsProps";

/**
 *
 * @param param0
 * @returns
 */
function Items({ items, onDelete, onEdit }: ItemsProps): JSX.Element {
  return (
    <>
      {items.map(
        (item: { id: string }): JSX.Element => (
          <GroceryItem
            item={item}
            key={item.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      )}
    </>
  );
}

export default Items;
