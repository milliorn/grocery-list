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
   * @param item - An object containing:
   *   - `text`: The description of the grocery item.
   *   - `quantity`: The quantity of the grocery item.
   *
   * This function does not return any value.
   */
  onSave: (item: { text: string; quantity: string }) => void
}
