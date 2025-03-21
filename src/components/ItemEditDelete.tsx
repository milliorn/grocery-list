import { JSX } from "react";
import { DeleteItem } from "./DeleteItem";
import { EditItem } from "./EditItem";
/**
 *
 * @param param0
 * @returns
 */
export function ItemEditDelete({
  item,
  onDelete,
  onEdit,
}: {
  item: object;
  onDelete: Function;
  onEdit: Function;
}): JSX.Element {
  return (
    <div>
      <DeleteItem onDelete={onDelete} item={item} />
      <EditItem onEdit={onEdit} item={item} />
    </div>
  );
}
