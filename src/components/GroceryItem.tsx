import { ItemsQuantity } from "./ItemsQuantity"
import { ItemEditDelete } from "./ItemEditDelete"
import { JSX } from "react"
import { GroceryItemProps } from "../props/GroceryItemProps"

/**
 * GroceryItem component renders a single grocery item.
 * It displays the item's quantity and includes edit and delete functionality.
 *
 * @param {GroceryItemProps} props - The properties for the GroceryItem component.
 * @param {import("../props/GroceryItemsProps").GroceryItemsProps} props.item -
 *   The grocery item data (including id, text, and quantity).
 * @param {(id: string) => void} props.onDelete -
 *   Callback function triggered when the delete action is requested; receives the item's id.
 * @param {(id: string) => void} props.onEdit -
 *   Callback function triggered when the edit action is requested; receives the item's id.
 *
 * @returns {JSX.Element} The rendered GroceryItem component.
 */
function GroceryItem({
  item,
  onDelete,
  onEdit
}: GroceryItemProps): JSX.Element {
  return (
    <div className="flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100">
      {/* Render the quantity component that displays item details */}
      <ItemsQuantity item={item} />
      {ItemEditDelete({ onDelete, item, onEdit })}
    </div>
  )
}

export default GroceryItem
