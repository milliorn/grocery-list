/**
 * Props for a component responsible for editing an item.
 *
 * @property {function(string): void} onEdit - A callback function that is invoked with the item's id when an edit is requested.
 * @property {{ id: string }} item - The item to be edited, identified by its `id` property.
 */
export type EditItemProps = {
  onEdit: (id: string) => void
  item: { id: string }
}
