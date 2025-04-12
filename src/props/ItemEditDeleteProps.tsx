/**
 * Props for components that handle editing and deleting an item.
 *
 * This type defines the properties for a component that provides
 * both editing and deletion functionalities for a given item.
 *
 * @property {{ id: string }} item - An object representing the item,
 *   which must contain at least an `id` property to uniquely identify the item.
 * @property {(id: string) => void} onDelete - Callback function that is called
 *   with the item's id when a delete action is triggered.
 * @property {(id: string) => void} onEdit - Callback function that is called
 *   with the item's id when an edit action is initiated.
 */
export type ItemEditDeleteProps = {
  item: { id: string }
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
