import { JSX } from "react";
import { FaTimes } from "react-icons/fa";
import { DeleteItemProps } from "../props/DeleteItemProps";

/**
 * DeleteItem component that renders a clickable icon to delete an item.
 * @param {DeleteItemProps} props - Contains the item and the onDelete callback.
 * @returns JSX.Element
 */
export function DeleteItem({ onDelete, item }: DeleteItemProps): JSX.Element {
  return (
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      <div className="my-1.5 text-red-500 cursor-pointer delIcon">
        <FaTimes onClick={() => onDelete(item.id)} />
      </div>
    </div>
  );
}
