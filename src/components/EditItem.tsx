import { FaPencilAlt } from "react-icons/fa";

export function EditItem({
  onEdit,
  item,
}: {
  onEdit: Function;
  item: any;
}): JSX.Element {
  return (
    <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      <div className="my-1.5 text-blue-500 cursor-pointer editIcon">
        <FaPencilAlt onClick={() => onEdit(item.id)} />
      </div>
    </div>
  );
}
