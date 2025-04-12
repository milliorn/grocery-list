import { JSX } from "react"
import { DeleteItem } from "./DeleteItem"
import { EditItem } from "./EditItem"
import { ItemEditDeleteProps } from "../props/ItemEditDeleteProps"

/**
 * Renders the delete and edit controls for an item.
 * @param props - Contains the item and the callbacks to delete or edit it.
 * @returns JSX.Element
 */
export function ItemEditDelete({
  item,
  onDelete,
  onEdit
}: ItemEditDeleteProps): JSX.Element {
  return (
    <div>
      <DeleteItem onDelete={onDelete} item={item} />
      <EditItem onEdit={onEdit} item={item} />
    </div>
  )
}
