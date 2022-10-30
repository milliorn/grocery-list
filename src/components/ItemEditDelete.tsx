import { DeleteItem } from "./DeleteItem";
import { EditItem } from "./EditItem";
/**
 *
 * @param param0
 * @returns
 */
export function ItemEditDelete({
  onDelete,
  item,
  onEdit,
}: {
  onDelete: Function;
  item: object;
  onEdit: Function;
}): JSX.Element {
  return (
    <div>
      <DeleteItem onDelete={onDelete} item={item} />
      <EditItem onEdit={onEdit} item={item} />
    </div>
  );
}
