import { GroceryItemsProps } from "./GroceryItemsProps"

/**
 * Props for a component that renders a list of grocery items.
 *
 * This type defines the properties required by a component
 * that displays multiple grocery items and provides functionalities
 * to delete or edit individual items.
 *
 * @property {GroceryItemsProps[]} items - An array of grocery items. Each item adheres to the GroceryItemsProps type.
 * @property {(id: string) => void} onDelete - A callback function that is invoked with an item's id when a delete action is triggered.
 * @property {(id: string) => void} onEdit - A callback function that is invoked with an item's id when an edit action is initiated.
 */
export type ItemsProps = {
  items: GroceryItemsProps[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
