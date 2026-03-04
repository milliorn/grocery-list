/**
 * Represents a grocery item.
 *
 * This type defines the properties of a grocery item, including a unique identifier,
 * a description, and the quantity of the item.
 *
 * @property {string} id - A unique identifier for the grocery item.
 * @property {string} text - A description or name of the grocery item.
 * @property {string} quantity - The quantity of the grocery item as a string.
 */
export type GroceryItemsProps = {
  id: string
  text: string
  quantity: string
}
