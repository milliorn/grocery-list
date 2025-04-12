/**
 * Props for a component responsible for deleting an item.
 *
 * @property {function(string): void} onDelete - Callback function that is called with the ID of the item to delete.
 * @property {{ id: string }} item - The item to be deleted; it must at least contain an `id` property.
 */
export type DeleteItemProps = {
  onDelete: (id: string) => void
  item: { id: string }
}
