import type { JSX } from "react"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          aria-hidden="true"
          fill="currentColor"
          width="1em"
          height="1em"
        >
          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>
      </button>
    </div>
  )
}

export default DeleteItem
