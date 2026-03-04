import { JSX } from "react"
import { FaPencilAlt } from "react-icons/fa"
import { EditItemProps } from "../props/EditItemProps"

/**
 * EditItem component renders a clickable icon that triggers an edit action for a given item.
 *
 * @param {EditItemProps} props - The properties for the EditItem component.
 * @param {(id: string) => void} props.onEdit - Callback function invoked with the item id when the edit icon is clicked.
 * @param {{ id: string }} props.item - The item to be edited. Must include an `id` property.
 *
 * @returns {JSX.Element} The rendered edit icon component.
 */
export function EditItem({ onEdit, item }: EditItemProps): JSX.Element {
  return (
    // Container div with responsive text sizing
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {/* Button with blue color and pointer cursor for editing */}
      <button
        type="button"
        aria-label="Edit item"
        className="my-1.5 text-blue-500 cursor-pointer editIcon bg-transparent border-none p-0"
        onClick={() => onEdit(item.id)}
      >
        <FaPencilAlt />
      </button>
    </div>
  )
}
