import { JSX } from "react"
import { DeleteItem } from "./DeleteItem"
import { EditItem } from "./EditItem"
import { ItemEditDeleteProps } from "../props/ItemEditDeleteProps"

/**
 * Renders the delete and edit controls for a given item.
 *
 * This component groups together the delete and edit functionalities
 * by rendering the respective DeleteItem and EditItem components.
 *
 * @param {ItemEditDeleteProps} props - The properties for the component.
 * @param {{ id: string }} props.item - The item to be edited or deleted; must include an `id` property.
 * @param {(id: string) => void} props.onDelete - Callback function invoked when a delete action is triggered.
 * @param {(id: string) => void} props.onEdit - Callback function invoked when an edit action is triggered.
 *
 * @returns {JSX.Element} The rendered component containing delete and edit controls.
 */
export function ItemEditDelete({
  item,
  onDelete,
  onEdit
}: ItemEditDeleteProps): JSX.Element {
  return (
    <div>
      {/* Render the delete control */}
      <DeleteItem onDelete={onDelete} item={item} />

      {/* Render the edit control */}
      <EditItem onEdit={onEdit} item={item} />
    </div>
  )
}
