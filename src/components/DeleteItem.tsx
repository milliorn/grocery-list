import { JSX } from "react"
import { FaTimes } from "react-icons/fa"
import { DeleteItemProps } from "../props/DeleteItemProps"

/**
 * DeleteItem component renders a clickable icon that triggers deletion of an item.
 *
 * @param {DeleteItemProps} props - The properties for the DeleteItem component.
 * @param {() => void} props.onDelete - Callback function that is invoked with the item's id when the delete icon is clicked.
 * @param {{ id: string }} props.item - The item to be deleted. Must include at least an `id` property.
 *
 * @returns {JSX.Element} The rendered delete icon component.
 */
export function DeleteItem({ onDelete, item }: DeleteItemProps): JSX.Element {
  return (
    // Container div with responsive text size classes
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {/* Icon container with spacing, red color, and pointer cursor for deletion */}
      <div className="my-1.5 text-red-500 cursor-pointer delIcon">
        {/* FaTimes is a cross icon. When clicked, it calls the onDelete callback with the item id. */}
        <FaTimes onClick={() => onDelete(item.id)} />
      </div>
    </div>
  )
}
