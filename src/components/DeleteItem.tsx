import type { JSX } from "react"
import { FaTimes } from "react-icons/fa"
import type { DeleteItemProps } from "../props/DeleteItemProps"

/**
 * DeleteItem component renders a clickable icon that triggers deletion of an item.
 *
 * @param {DeleteItemProps} props - The properties for the DeleteItem component.
 * @param {(id: string) => void} props.onDelete - Callback function that is invoked with the item's id when the delete icon is clicked.
 * @param {Pick<import("../props/GroceryItem").GroceryItem, "id">} props.item - The item to be deleted.
 *
 * @returns {JSX.Element} The rendered delete icon component.
 */
function DeleteItem({ onDelete, item }: DeleteItemProps): JSX.Element {
  return (
    // Container div with responsive text size classes
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {/* Button with red color and pointer cursor for deletion */}
      <button
        type="button"
        aria-label="Delete item"
        className="my-1.5 text-red-500 cursor-pointer delIcon bg-transparent border-none p-0"
        onClick={() => onDelete(item.id)}
      >
        <FaTimes />
      </button>
    </div>
  )
}

export default DeleteItem
