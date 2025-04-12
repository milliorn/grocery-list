import { JSX } from "react"
import GroceryItem from "./GroceryItem"
import { ItemsProps } from "../props/ItemsProps"

/**
 * Items component renders a list of grocery items.
 *
 * This component takes an array of grocery items and displays each item using
 * the GroceryItem component. It also passes the appropriate callbacks for
 * delete and edit actions to each GroceryItem.
 *
 * @param {ItemsProps} props - The properties for the Items component.
 * @param {import("../props/GroceryItemsProps").GroceryItemsProps[]} props.items -
 *   An array of grocery items to be rendered.
 * @param {(id: string) => void} props.onDelete - Callback function invoked with an item's id when a delete action is triggered.
 * @param {(id: string) => void} props.onEdit - Callback function invoked with an item's id when an edit action is initiated.
 *
 * @returns {JSX.Element} The rendered list of grocery items.
 */
function Items({ items, onDelete, onEdit }: ItemsProps): JSX.Element {
  return (
    <>
      {items.map((item) => (
        // Render each grocery item using its unique id as the key
        <GroceryItem
          item={item}
          key={item.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  )
}

export default Items
