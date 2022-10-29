import { FaPencilAlt, FaTimes } from "react-icons/fa";

/**
 * 
 * @param param0 
 * @returns 
 */
export function ItemEditDelete({ onDelete, item, onEdit }: { onDelete: any; item: any; onEdit: any; }): JSX.Element {
  return (
    <div>
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <FaTimes
          onClick={() => onDelete(item.id)}
          className="my-1.5 text-red-500 cursor-pointer delIcon" />
      </p>
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <FaPencilAlt
          onClick={() => onEdit(item.id)}
          className="my-1.5 text-blue-500 cursor-pointer editIcon" />
      </p>
    </div>
  );
}
