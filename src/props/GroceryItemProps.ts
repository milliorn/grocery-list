import { GroceryItemsProps } from "./GroceryItemsProps"

/**
 * Props for a Grocery Item component.
 *
 * This type defines the properties required by a component responsible for
 * displaying an individual grocery item. It includes the grocery item data
 * as well as callback functions for deleting and editing the item.
 *
 * @property {GroceryItemsProps} item - The data for a single grocery item,
 *   which may include properties like id, text, quantity, etc.
 * @property {(id: string) => void} onDelete - A callback function that is
 *   invoked with the item's id when the delete action is triggered.
 * @property {(id: string) => void} onEdit - A callback function that is invoked
 *   with the item's id when the edit action is initiated.
 */
export type GroceryItemProps = {
  item: GroceryItemsProps
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
