import { ItemsQuantity } from "./ItemsQuantity";
import { ItemEditDelete } from "./ItemEditDelete";
import { JSX } from "react";
import { GroceryItemProps } from "../props/GroceryItemProps";

/**
 * @param {*}
 * @returns
 */
function GroceryItem({
  item,
  onDelete,
  onEdit,
}: GroceryItemProps): JSX.Element {
  return (
    <div className="flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100">
      <ItemsQuantity item={item} />
      {ItemEditDelete({ onDelete, item, onEdit })}
    </div>
  );
}

export default GroceryItem;
