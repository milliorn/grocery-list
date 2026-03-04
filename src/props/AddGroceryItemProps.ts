import { GroceryItem } from "./GroceryItem"

/**
 * Props for the AddGroceryItem component.
 *
 * This type defines the properties that the AddGroceryItem component expects,
 * including a callback function (`onSave`) that is invoked when a new grocery
 * item is saved.
 */
export type AddGroceryItemProps = {
  /**
   * Callback function that is called when a grocery item is created.
   *
   * @param item - A grocery item without an id (id is assigned on creation).
   *
   * This function does not return any value.
   */
  onSave: (item: Omit<GroceryItem, "id">) => void
}
