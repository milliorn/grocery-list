import { JSX } from "react";
import { FaTimes } from "react-icons/fa";
/**
 *
 * @param param0
 * @returns
 */
export function DeleteItem({
  onDelete,
  item,
}: {
  onDelete: Function;
  item: any;
}): JSX.Element {
  return (
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      <div className="my-1.5 text-red-500 cursor-pointer delIcon">
        <FaTimes onClick={() => onDelete(item.id)} />
      </div>
    </div>
  );
}
