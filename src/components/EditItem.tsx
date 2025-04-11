import { JSX } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { EditItemProps } from "../props/EditItemProps";

/**
 * EditItem component that renders a clickable icon to edit an item.
 * @param {DeleteItemProps} props - Contains the item and the EditItem callback.
 * @returns JSX.Element
 */
export function EditItem({ onEdit, item }: EditItemProps): JSX.Element {
  return (
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      <div className="my-1.5 text-blue-500 cursor-pointer editIcon">
        <FaPencilAlt onClick={() => onEdit(item.id)} />
      </div>
    </div>
  );
}
